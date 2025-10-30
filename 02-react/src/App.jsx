import { useState } from "react";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { SearchFormSection } from "./components/SearchFormSection.jsx";
import { JobListings } from "./components/JobListings.jsx";
import { Pagination } from "./components/Pagination.jsx";

import jobsData from "./data.json";

const RESULTS_PER_PAGE = 4;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);
  const pageResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, //Pagina 1 -> 0
    currentPage * RESULTS_PER_PAGE //Pagina 1 -> 5
  );

  const handlePageChange = (page) => {
    console.log("Cambiando a la pagina", page);
    setCurrentPage(page);
  };
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings jobs={pageResults} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
