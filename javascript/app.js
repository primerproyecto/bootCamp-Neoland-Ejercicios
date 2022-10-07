
/* ```
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
``` */

var myFavoriteHero = 'Hulk';
var x = 50;
var h = 5;
var y = 10;
var z = h + y

// **Iteración #2: Variables avanz  adas**

/* ```jsx
1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};``` */
const character = {name: 'Jack Sparrow', age: 10}
character.age = 25;

/* ```1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'``` */

var firstName = 'Jon';
var lastName = 'Snow';
var age = 24;

console.log('Soy ' + firstName + lastName + 'tengo ' + age + ' y me gustan los lobos');

/* ```1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29}; ``` */

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

/* ```1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
``` */
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1, car2);
//**Iteración #3: Operadores**

/* ```jsx
1.1 Multiplica 10 por 5 y muestra el resultado mediante console. ```*/
var diezPorCinco = 10 * 5;

console.log(diezPorCinco);
/* 1.2 Divide 10 por 2 y muestra el resultado en un console. */
var diezBydos = 10 / 2;
console.log(diezBydos);
/* 1.3 Muestra mediante un console el resto de dividir 15 por 9. */

var quincePer9 = 15 % 9;
console.log(quincePer9);

/* 1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.
 */
var p = 10;
var j = 5;
var o = p + j;

console.log(o);

/* 1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5. */

var c = 10;
var m = 50;
var i = c * m;

console.log(o);

//**Iteración #4: Arrays**

/* 
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola. */
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; 
console.log(avengers[1]);


/* 1.2 Cambia el primer elemento de avengers a "IRONMAN" */
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[1] = 'IRONMAN';

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array. */
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array */
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters1.push('Morty');
rickAndMortyCharacters1.push('Summer');
console.log(rickAndMortyCharacters1.length);

//TODAVIA NO
/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.pop();
console.log('el primero es ' + rickAndMortyCharacters2[0] + ' el último ' + rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]);

// TODAVIA NO
/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; /* **Iteración #5: Condicionales** */

console.log(rickAndMortyCharacters3.filter(( person)=> {
    return person != 'Beth'
}));

//En base al código siguiente, muestra los mensajes correctos por consola.


const number1 = 10;
const number2 = 20;
const number3 = 2;


if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) { 
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number2 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//**Iteración #6: Bucles**



/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */
var arrayNumeros = [];
for(let i = 0; i < 10; i++){
    arrayNumeros.push(i);
}
console.log(arrayNumeros);
/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

var nuevoArray = arrayNumeros.filter((numero) => {
    return numero % 2 == 0
})
console.log(nuevoArray);
/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
``` */

var contarOvejas = [];
for(let i = 0; i < 10; i++){
    console.log(contarOvejas.push('Intentando dormir 🐑'));
}


contarOvejas[10] = 'Dormido';
console.log(contarOvejas);


// PARTE 2



/* Completa la función que tomando dos números como argumento devuelva el más alto. */

/* ```jsx
function sum(numberOne , numberTwo) {
  // insert code
}
``` */
function sum(numberOne , numberTwo) {
    return numberOne > numberTwo ? numberOne : numberTwo;
  }
console.log(sum(5,2));

/* **Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */


const avengers5 = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spidermand', 'Captain M.'];
function findLongestWord(param) {
  // insert code
  let word = "";
  for (let i = 0; i < avengers5.length; i++) {
    if (word.length < avengers5[i].length) {
      word = avengers5[i];
    }
  }
  return word;
}

console.log(findLongestWord(...avengers));

/* **Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */

/* ```jsx
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}
``` */
const numbersToAdd = [1, 2, 3, 5, 45, 37, 58];
const reducedArray = numbersToAdd.reduce((viejoValor, nuevoValor)=> {
  return viejoValor + nuevoValor
},0)
;
console.log(reducedArray);

/* **Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

/* ```jsx
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
``` */
const promedio = reducedArray / numbersToAdd.length;
console.log(promedio);

/* **Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

/* ```jsx
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}
``` */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
  var sumatorio = 0;
  for(var i = 0; i < param.length; i++){
    if( typeof param[i] === 'number'){
      sumatorio += param[i];
    } else {
      sumatorio += param[i].length;
    }
  }
  return sumatorio
}
console.log(averageWord(mixedElements));
/* **Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

/* ```jsx
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}
``` */
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

// no la entiendo.
function removeDuplicates(arr) {
  return arr.filter((item,index) => {
   return arr.indexOf(item) === index;
  });
}
var eleminaDuplicados = removeDuplicates(duplicates);
console.log(eleminaDuplicados);
/* **Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */


const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param, palabraBuscada) {
  // insert code
  if(param.includes(palabraBuscada)){
    return `Es ${param.includes(palabraBuscada)} la palabra ${palabraBuscada} está en la posición ${param.indexOf(palabraBuscada)}`;
  } else {
    return false
  };
  
}
var tieneDuplicados = finderName(nameFinder,'Peter' );
console.log(tieneDuplicados)


/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función: */


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code. Copiada
  const count = {};
  param.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  console.log(count);
}
var cuantosDuplicados = repeatCounter(counterWords);



// JS LOOPS. EJERCICIOS 3

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

var tieneCamiseta = products.filter((palabra) => palabra.includes('Camiseta') );
console.log(tieneCamiseta);


/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. */

const alumns = [
  {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
  {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
  {name: 'Juan Miranda', T1: false, T2: true, T3: true},
  {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
  {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

var mappedAlumns = alumns.map((alumn)=> {
  var isApproved = true;
  var trimestresAprobados = 0;
  if(alumn.T1 === true){
    ++trimestresAprobados
  }
  if(alumn.T2 === true){
    ++trimestresAprobados
  }
  if(alumn.T3 === true){
    ++trimestresAprobados
  }

  return {
    'name' : alumn.name,
    'isApproved': trimestresAprobados >= 2 ? true : false
  }
})
console.log(mappedAlumns)


