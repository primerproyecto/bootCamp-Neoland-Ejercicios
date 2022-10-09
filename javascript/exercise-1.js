/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const $body = document.body;
const $ul = document.createElement("ul");

for (const pais of countries) {
  const $li = document.createElement("li");
  $li.innerHTML = pais;
  $ul.append($li);
}
$body.append($ul);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const divABorrar = document.querySelector(".fn-remove-me");
divABorrar.parentElement.removeChild(divABorrar);

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". */
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const $divContenedor = document.querySelector('div[data-function="printHere"]');
const $ulCars = document.createElement("ul");
for (const car of cars) {
  const $li = document.createElement("li");
  $li.innerHTML = car;
  $ulCars.append($li);
}
$divContenedor.append($ulCars);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach( (pais) => {
    console.log(pais.title);
    const $h4 = document.createElement('h4');
    const $img = document.createElement('img');
    const $divs = document.createElement('div');
    $divs.classList.add('card');

    $h4.innerHTML = pais.title;
    $img.src = pais.imgUrl;

    $divs.append($h4);
    $divs.append($img);
    $body.append($divs);
});

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const $boton = document.createElement('button');
$boton.innerHTML = 'Texto de boton';

$boton.addEventListener('click', function(e){
    e.preventDefault();
    const divABorrar = document.querySelector('div.card:last-of-type');
    if(divABorrar){
        divABorrar.remove();
    }
})
$body.append($boton);


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */
const cards = document.querySelectorAll('div.card');

for( card of cards){
    const $cardButton = document.createElement('button');
    $cardButton.innerHTML = 'Borra imagen';
    card.append($cardButton);
    $cardButton.addEventListener('click', function(e){
        e.preventDefault();
        const divABorrar2 = e.target.parentElement;
        if(divABorrar2){
            divABorrar2.remove();
        }
    })
}



