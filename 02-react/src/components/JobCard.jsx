// src/components/JobCard.jsx
import React from "react";
import { useState } from "react";

export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);
  const handleApplyClick = () => {
    setIsApplied(true);
  };

  const buttonClasses = isApplied
    ? "button-apply-job is-applied"
    : "button-apply-job";
  const buttonText = isApplied ? "Aplicado" : "Aplicar";

  return (
    <article
      className="job-listing-card"
      data-modalidad={job.data.modalidad}
      data-tecnologia={job.data.tecnologia}
      data-nivel={job.data.nivel}
    >
      <div>
        <h3>{job?.titulo ?? "Título no disponible"}</h3>
        <small>
          {job?.empresa ?? "Empresa desconocida"} |{" "}
          {job?.ubicacion ?? "Ubicación"}
        </small>
        <p>{job?.descripcion ?? ""}</p>
      </div>

      <button className={buttonClasses} onClick={handleApplyClick}>
        {buttonText}
      </button>
    </article>
  );
}
