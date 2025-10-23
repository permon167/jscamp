/* const botones = document.querySelectorAll(".btn-aplicar");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    boton.textContent = "¡Aplicado!";
    boton.classList.add("is-applied");
    boton.disabled = true;
  });
}); */

/* Aplicar sin tener que iterar, si no con la logica de delegacion de eventos */
const jobsListingsSection = document.querySelector(".jobs-listings");

if (!jobsListingsSection) {
  throw new Error("No se encontró la sección de ofertas de empleo");
}

jobsListingsSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("btn-aplicar")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const filter = document.querySelector("#filter-tecnologia");

if (!filter) {
  throw new Error("No se encontró el filtro de empleos");
}

filter.addEventListener("change", function (event) {
  console.log(filter.value);
});
