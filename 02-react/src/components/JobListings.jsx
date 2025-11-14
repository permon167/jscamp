import { Fragment } from "react";
import { JobCard } from "./JobCard.jsx";

export function JobListings({ jobs }) {
  return (
    <>
      <div>
        <h2>Resultados de busqueda</h2>
      </div>
      <div className="jobs-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
