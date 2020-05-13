/* Se inicializan los botones flotantes indicando una dirección 
para la salida de los botones */
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.fixed-action-btn');
  const instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    //hoverEnabled: false
  });
});
