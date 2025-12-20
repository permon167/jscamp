//Boton Aplicar y cambio de estado
/* Aplicar sin tener que iterar, si no con la logica de delegacion de eventos */
const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

//comentarios con otros eventos interesantes:
/* const botones = document.querySelectorAll(".btn-aplicar");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    boton.textContent = "¡Aplicado!";
    boton.classList.add("is-applied");
    boton.disabled = true;
  });
}); */
