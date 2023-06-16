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

  it("No deberia permitir que el titulo sobrepase los 50 caracteres", () => {
    const postear = new Post();
    const titulo = "lkjhdfljk aaflkjhsa ldfalskd jhfasjdhf alskdjhf asdkjfha sdjhflaksd jfhk jsdflka s";
    const detalle = "Contenido detallado del post";
    const resultado = postear.publicarPost(titulo, detalle);
    expect(resultado).toEqual("El título excede la longitud máxima permitida");
  });

  
});
