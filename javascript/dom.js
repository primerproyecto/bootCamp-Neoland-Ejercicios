
/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme** */
console.log(document.querySelector('button.showme'));
/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */
console.log(document.querySelector('h1#pillado'));
/* 1.3 Usa querySelector para mostrar por consola todos los p */
console.log(document.querySelectorAll('p'));
/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */
console.log(document.querySelectorAll('.pokemon'));
/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */
console.log(document.querySelectorAll('*[data-function="testMe"]'));
/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". ?? */ 
console.log(document.querySelector('[data-function="testMe"]:nth-child(2)'));


/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
let $contenedorDiv = document.createElement('div');
document.body.appendChild($contenedorDiv)
/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
let $parrafo = document.createElement('p');
$parrafo.innerHTML = 'Javscript';
$contenedorDiv.appendChild($parrafo);
/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
const parrafos = [];
const numeroParrafos = 6;
for (let i = 0; i < numeroParrafos; i++){
    parrafos.push('Lorem ipsun')
}
for( const parrafo1 of parrafos){
    let $parrafo2 = document.createElement('p');
    $contenedorDiv.appendChild($parrafo2);
    $parrafo2.innerHTML = parrafo1;
}



/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

let $parrafo3 = document.createElement('p');
$parrafo3.innerHTML = 'Soy dinámico';
$contenedorDiv.appendChild($parrafo3);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
document.querySelector('h2.fn-insert-here').innerHTML = 'Wubba Lubba dub dub'

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

var $ul = document.createElement('ul');
apps.forEach(item => {
    var $liItem = document.createElement('li');
    $liItem.innerHTML = item;
    $ul.append($liItem)
})
document.body.append($ul);
/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const parrafosAborrar = document.querySelectorAll('.fn-remove-me');
for( parrafo of parrafosAborrar){
    parrafo.parentNode.removeChild(parrafo);
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const $parrafo4 = document.createElement('p');
$parrafo4.innerHTML = 'Voy en medio'

var primerDiv = document.querySelector('div');
primerDiv.append($parrafo4);

/* 
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

var divsConClase = document.querySelectorAll('div.fn-insert-here');
 for(divs of divsConClase) {
    const $parrafo5 = document.createElement('p');
    $parrafo5.innerHTML = 'Voy dentro';
    divs.appendChild($parrafo5);
}
