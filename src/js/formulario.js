/* Inicialización del Datepicker y de los elementos de selección */
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.datepicker');
  const instances = M.Datepicker.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems);
});