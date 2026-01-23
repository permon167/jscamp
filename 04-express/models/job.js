import jobs from "../jobs.json" with { type: "json" };

export class JobModel {
  static async getAll({
    text,
    title,
    level,
    limit = 10,
    technology,
    offset = 0,
  }) {
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
    return paginatedJobs;
  }

  static async getById(id) {
    return jobs.find((job) => job.id === id);
  }

  static async create({ titulo, empresa, ubicacion, data }) {
    const newJob = {
      id: crypto.randomUUID(),
      titulo,
      empresa,
      ubicacion,
      data,
    };
    jobs.push(newJob);
    return newJob;
  }
}
