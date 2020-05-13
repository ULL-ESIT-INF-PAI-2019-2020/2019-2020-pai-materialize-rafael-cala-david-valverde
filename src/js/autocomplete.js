/* Opciones del autocompletado */
const options = {
  data: {
    "Java": "../img/logo-java.png",
    "Javascript": "../img/logo-js.png",
    "CSS": "../img/logo-css.png",
    "HTML": "../img/logo-html.png",
    "NodeJS": "../img/logo-nodejs.png",
    "PHP": "../img/logo-php.png",
    "Python": "../img/logo-python.png",
    "C++": "../img/logo-cpp.png",
    "C#": "../img/logo-csharp.png" 
  },
}

/* Evento que incializa el autocompletado */
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.autocomplete');
  const instances = M.Autocomplete.init(elems, options);
});