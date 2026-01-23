import { JobModel } from "../models/job.js";

export class JobController {
  static async getAll(req, res) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    const {
      text,
      title,
      level,
      limit = 10,
      technology,
      offset = 0,
    } = req.query;

    const jobs = await JobModel.getAll({
      text,
      title,
      level,
      limit,
      technology,
      offset,
    });
    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    return res.json({
      data: jobs,
      total: jobs.length,
      limit: limitNumber,
      offset: offsetNumber,
    });
  }

  //async por si queremos hacer consultas a BD
  static async getById(req, res) {
    //parametro dinamico
    const { id } = req.params;
    const job = await JobModel.getById(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    return res.json(job);
  }

  static async create(req, res) {
    const { titulo, empresa, ubicacion, data } = req.body; //NECESITAMOS EL MIDDLEWARE PARA PODER LEER EL BODY con el express.json()
    const newJob = await JobModel.create({ titulo, empresa, ubicacion, data });
    return res
      .status(201)
      .json({ message: "Job created successfully", job: newJob });
  }
}
