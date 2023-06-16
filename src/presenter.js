import Post from "./sumador";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#postForm");
const div = document.querySelector("#resultado-div");

const postear = new Post();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const resultado = postear.publicarPost(titulo.value, descripcion.value);
  div.innerHTML = "<p>Resultado:</p>";
  if (Array.isArray(resultado)) {
    for (const post of resultado) {
      div.innerHTML += "<p>Título: " + post.titulo + "<br>Detalle: " + post.detalle + "</p>";
    }
  } else {
    div.innerHTML += "<p>" + resultado + "</p>";
  }
});
