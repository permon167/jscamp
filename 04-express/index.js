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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
