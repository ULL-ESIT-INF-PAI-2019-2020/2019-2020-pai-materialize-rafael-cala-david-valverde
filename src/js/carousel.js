/* Evento que inicializa el carousel cuando carga la página */
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems, {
    //numVisible: 3
  });
});