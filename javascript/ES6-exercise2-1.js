
/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

const $input = document.querySelector('#texto');
const $boton = document.querySelector('#botonEnvio');

const baseUrl = 'https://api.nationalize.io';




/* ∫ */
  $boton.addEventListener('click', function(e){
    e.preventDefault();
    const apiParameter = `/${$input.value}`;
    console.log(apiParameter)
  })