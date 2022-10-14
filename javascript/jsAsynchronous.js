/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch("https://api.agify.io?name=michael")
  .then((resp) => {
    return resp.json();
  })
  .then((data2) => console.log(data2));

  
/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'; */

const $botonEnvio = document.querySelector('#botonEnvio');
const $botonReseteo = document.querySelector('#botonReseteo');
const $input = document.querySelector('#texto');
const $p = document.createElement('p');
const baseUrl = 'https://api.nationalize.io/';




$botonEnvio.addEventListener('click', function(e){
  e.preventDefault();
  fetch( baseUrl + '?name=' + $input.value)
  .then((resp) => {
    return resp.json();
  })
  .then(data => {
    const { country, name } = data;

    for (let index = 0; index < country.length; index++) {
      const pais = country[index].country_id;
      const porcentaje = country[index].probability * 100 + ' %';
      const $p = document.createElement('p');
      const $botonX = document.createElement('button');
      $botonX.innerHTML = 'submit';
      $p.classList.remove('fading');
      $p.innerHTML += `El nombre ${name} tiene un ${porcentaje} de ser del país ${pais}`;
      
      $p.appendChild($botonX );

      document.body.append($p);
    }

    console.log(country[0].country_id);
  });
})

$botonReseteo.addEventListener('click', function(e){
  e.preventDefault();
  $input.value = '';
  const parrafos = document.querySelectorAll('p');
  for ( const pes of parrafos ){
    pes.classList.add('fading');
    setTimeout(() => {
      pes.remove();
    }, 1000);
  }
})

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */


/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */



  
  