import Post from "./sumador.js";

describe("Postear", () => {
  it("deberia postear un nuevo post", () => {
    const postear = new Post();
    const titulo = "Título del post";
    const detalle = "Contenido detallado del post";
    const resultado = postear.publicarPost(titulo, detalle);
    expect(resultado).toEqual([
      { titulo: titulo, detalle: detalle }
    ]);
  });

  
});
