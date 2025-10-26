// Fetch para obtener datos de un archivo JSON
const container = document.querySelector(".jobs-listings");
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.tecnologia = job.data.tecnologia;
      article.dataset.nivel = job.data.nivel;
      article.innerHTML = `<div>
        <h3>${job.titulo}</h3>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
      <button class="button-apply-job"> Aplicar</button>
      `;
      container.appendChild(article);
    });
  });
