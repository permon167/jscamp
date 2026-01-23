import express, { request } from "express";
import cors from "cors";
//asi se importan con with para el json, import en cuanto levantamos el servidor OPCION 1
import jobs from "./jobs.json" with { type: "json" };

const PORT = process.env.PORT ?? 3000;
const app = express();

const ACCEPTED_ORIGINS = [
  "http://localhost:3000",
  "http://permon",
  "http://localhost:5173",
];

//Podriamos ver cookies de validacion, sesiones, etc, ahora solo controlamos el origen, aqui devolvemos la cabecera Access-Control-Allow-Origin
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    },
  }),
);

app.use(express.json()); //middleware para parsear el body como json

app.use((request, response, next) => {
  const timeString = new Date().toLocaleDateString();
  console.log(`[${timeString}] ${request.method} ${request.url}`);
  // Llamar al siguiente middleware o ruta
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
  });
});

//CRUD : Create, Read, Update, Delete

//Idempotente - no importa cuantas veces se llame, el resultado sera el mismo, hace que cumple API REST
app.get("/jobs", async (req, res) => {
  //res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  const { text, tittle, level, limit = 10, technology, offset } = req.query;
  let filteredJobs = jobs;

  if (text) {
    const serchText = text.toString().toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.titulo.toLowerCase().includes(serchText) ||
        job.descripcion.toLowerCase().includes(serchText),
    );
  }

  if (technology) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        Array.isArray(job.data?.technology) &&
        job.data.technology.includes(technology),
    );
  }

  const limitNumber = Number(limit);
  const offsetNumber = Number(offset) || 0;

  const paginatedJobs = filteredJobs.slice(
    offsetNumber,
    offsetNumber + limitNumber,
  );

  return res.json({
    data: paginatedJobs,
    total: filteredJobs.length,
    limit: limitNumber,
    offset: offsetNumber,
  });
});

app.get("/jobs/:id", (req, res) => {
  //parametro dinamico
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }
  return res.json(job);
});

//POST
app.post("/jobs", (req, res) => {
  const { titulo, empresa, ubicacion, data } = req.body; //NECESITAMOS EL MIDDLEWARE PARA PODER LEER EL BODY con el express.json()
  const newJob = {
    id: crypto.randomUUID(),
    titulo,
    empresa,
    ubicacion,
    data,
  };
  jobs.push(newJob); //lo haremos en BD con INSERT
  return res
    .status(201)
    .json({ message: "Job created successfully", job: newJob });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
