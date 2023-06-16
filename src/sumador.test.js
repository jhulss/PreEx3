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
  
  it("No deberia permitir que un post se publique sin titulo", () => {
    const postear = new Post();
    const titulo = "";
    const detalle = "Contenido detallado del post";
    const resultado = postear.publicarPost(titulo, detalle);
    expect(resultado).toEqual("No es posible publicar un post sin título");
  });

  
});
