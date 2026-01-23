import express from "express";
import { jobsRouter } from "./routes/jobs.js";
import { corsMiddleware } from "./middlewares/cors.js";
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(corsMiddleware());

app.use(express.json()); //middleware para parsear el body como json

app.use("/jobs", jobsRouter); // Usar el router de jobs para las rutas que comienzan con /jobs

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
