describe("Publicar un nuevo post", () => {
  it("Muestra un post", () => {
    const titulo = "Título del post";
    const detalle = "Contenido detallado del post";
    cy.visit("/");
    cy.get("#titulo").type(titulo);
    cy.get("#descripcion").type(detalle);
    cy.get("#postForm").submit();
    cy.get("#resultado-div").should("contain", titulo);
    cy.get("#resultado-div").should("contain", detalle);
  });

  it("No permite que el titulo exceda los 50 caracteres", () => {
    const titulo = "lkjhdfljk aaflkjhsa ldfalskd jhfasjdhf alskdjhf asdkjfha sdjhflaksd jfhk jsdflka s";
    cy.visit("/");
    cy.get("#titulo").type(titulo);
    cy.get("#postForm").submit();
    cy.get("#resultado-div").should("contain", "El título excede la longitud máxima permitida"); 
  });

  

});
