/* Buscador */
const searchInput = document.querySelector("#empleos-search-input");
searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
});

const searchForm = document.querySelector("#empleos-search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Buscando:", searchInput.value);
});

/* Filtros del buscador */
const filter = document.querySelector("#filter-location");

filter.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");

  const selectedValue = filter.value;

  jobs.forEach((job) => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute("data-modalidad");
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", isShown === false);
  });
});
