import { use, useEffect, useState } from "react";

import { SearchFormSection } from "../components/SearchFormSection.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { Pagination } from "../components/Pagination.jsx";

import jobsData from "../data.json";

const RESULTS_PER_PAGE = 4;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    const techMatch =
      !filters.technology || job.data.tecnologia === filters.technology;

    const locationMatch =
      !filters.location || job.data.modalidad === filters.location;

    const levelMatch =
      !filters.experienceLevel || job.data.nivel === filters.experienceLevel;

    return techMatch && locationMatch && levelMatch;
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pageResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, //Pagina 1 -> 0
    currentPage * RESULTS_PER_PAGE //Pagina 1 -> 5
  );

  const handlePageChange = (page) => {
    console.log("Cambiando a la pagina", page);
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  //Nuevo hook "useEffect"

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length}, Página: ${currentPage} - DevJobs`;
  }, [jobsWithTextFilter, currentPage]);

  /* ************** HTML *********************** */
  return (
    <main>
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section>
        <JobListings jobs={pageResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
