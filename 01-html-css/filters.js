/* Buscador */
const searchInput = document.querySelector("#empleos-search-input");
const searchForm = document.querySelector("#empleos-search-form");

// 🔹 Buscar en tiempo real al escribir
searchInput.addEventListener("input", filtrarPorBusqueda);

// Función que filtra las ofertas según lo escrito
function filtrarPorBusqueda() {
  const texto = searchInput.value.trim().toLowerCase();
  const jobCards = document.querySelectorAll(".job-listing-card");

  jobCards.forEach((job) => {
    const titulo = job.querySelector("h3")?.textContent.toLowerCase() || "";

    job.classList.toggle("is-hidden", !titulo.includes(texto));
  });
}

// 🔹 Evitar recarga si se pulsa Enter
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filtrarPorBusqueda(); // también filtramos al enviar
});

/* ******** Filtros del buscador ******** */

// Seleccionamos ambos filtros
const filterLocation = document.querySelector("#filter-location");
const filterExperience = document.querySelector("#filter-experience-level");
const filterTechnology = document.querySelector("#filter-technology");

// Comprobamos que existen
if (!filterLocation || !filterExperience || !filterTechnology) {
  console.warn(
    "No se encontraron los filtros de ubicación, experiencia o tecnología"
  );
}

function filtrarOfertas() {
  const selectedLocation = filterLocation.value.trim().toLowerCase();
  const selectedExperience = filterExperience.value.trim().toLowerCase();
  const selectedTechnology = filterTechnology.value.trim().toLowerCase();

  const jobs = document.querySelectorAll(".job-listing-card");

  jobs.forEach((job) => {
    const modalidad = job.getAttribute("data-modalidad") || "";
    const experiencia = job.getAttribute("data-nivel") || "";
    const tecnologias = (job.getAttribute("data-tecnologia") || "")
      .toLowerCase()
      .split(",") // convierte el string en array
      .map((t) => t.trim()); // limpia espacios

    // Mostrar si cumple TODOS los filtros activos
    const matchLocation = !selectedLocation || modalidad === selectedLocation;
    const matchExperience =
      !selectedExperience || experiencia === selectedExperience;
    const matchTechnology =
      !selectedTechnology || tecnologias.includes(selectedTechnology);
    const showJob = matchLocation && matchExperience && matchTechnology;

    job.classList.toggle("is-hidden", !showJob);
  });
}

// Escuchamos los cambios en los tres filtros
filterLocation.addEventListener("change", filtrarOfertas);
filterExperience.addEventListener("change", filtrarOfertas);
filterTechnology.addEventListener("change", filtrarOfertas);
