class Post 
{
  constructor ()
  {
    this.listaPublicaciones = [];
  }

  publicarPost(titulo, detalle)
  {
    if (titulo === "")
    {
      return "No es posible publicar un post sin título";
    }

    if (titulo.length > 50) {
      return "El título excede la longitud máxima permitida";
    }

    if (detalle.length > 150) {
      return "El detalle excede la longitud máxima permitida";
    }

    const nuevoPost = {
      titulo: titulo,
      detalle: detalle,
    };
  
    this.listaPublicaciones.push(nuevoPost);

    return this.listaPublicaciones;
  }
}


export default Post;
