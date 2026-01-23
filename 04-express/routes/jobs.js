import { Router } from "express";
import { JobController } from "../controllers/jobs.js";

export const jobsRouter = Router();

//CRUD : Create, Read, Update, Delete

//Idempotente - no importa cuantas veces se llame, el resultado sera el mismo, hace que cumple API REST
jobsRouter.get("/", JobController.getAll);

jobsRouter.get("/:id", JobController.getById);

//POST
jobsRouter.post("/", JobController.create);

/* jobsRouter.get("/", (req, res) => {
  res.send("Hello, World!");
});

jobsRouter.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
  });
});
 */
