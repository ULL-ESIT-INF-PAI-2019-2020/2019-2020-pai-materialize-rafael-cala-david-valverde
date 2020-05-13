/* Inicialización de la función para collapsible */
const elem = document.querySelector('.collapsible.expandable');
const instance = M.Collapsible.init(elem, {
  inDuration: 400, /* 300 by default */
  //accordion: false
});