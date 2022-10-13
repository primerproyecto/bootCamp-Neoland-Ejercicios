
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
  var trimestresAprobados = 0;
  if(alumn.T1 === true){
    ++trimestresAprobados;
  }
  if(alumn.T2 === true){
    ++trimestresAprobados;
  }
  if(alumn.T3 === true){
    ++trimestresAprobados;
  }

  return {
    'name' : alumn.name,
    'isApproved': trimestresAprobados >= 2 ? true : false
  }
})
console.log(mappedAlumns)


/* JS Review Basics */

/* **Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()** */

const movies = [
  {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
  {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
  {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
  {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

var categorias = [];
for (let movie of movies) {
  movie.categories.forEach((categoria) => {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  });
}
console.log(categorias)

/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]

/* for(var i = 0; i < users.length; i++){

  var sonidosFavoritos = users[i].favoritesSounds;
  console.log(sonidosFavoritos)
  for(const sonidofavorito in sonidosFavoritos) {
    console.log(sonidosFavoritos[sonidofavorito].volume)
  }
} */


console.log(users[0].favoritesSounds.waves.volume)
let media;
let totalSum =[]; 
for (usuarios of users){  
   for (key in usuarios.favoritesSounds){ 
    totalSum.push(usuarios.favoritesSounds[key].volume)   
  } 
} 
console.log(totalSum)


media = totalSum.reduce((a, b) => a + b, 0) / totalSum.length;
console.log(media);

/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario. ??

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */

/* const users2 = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]

for( usuarios of users2){
  console.log(typeof usuarios);
  for(const key in usuarios.favoritesSounds){
    console.log(key);
    console.log(typeof usuarios.favoritesSounds[key]);
    for(const tipo in usuarios.favoritesSounds[key]) {
      
        console.log(usuarios.favoritesSounds[key].volume)
      
      
    }
  }
} */

/* **Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

const findArrayIndex = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex2 (array, text) {
  console.log(text + ' se encuentra en la posición ' + array.indexOf(text) + ' del array' )
  return 'la palabra ' + text + ' se encuentra en la posición ' + array.indexOf(text) + ' del array';
};

console.log(findArrayIndex2(findArrayIndex, 'Ajolote'))


/* **Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();** */

function rollDice(max) {
  return Math.floor(Math.random() * max);
}
console.log('número aleatorio ' + rollDice(6));

/* **Iteración #6: Función swap** ??

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. */

/* JS ES6 */

/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */
const primeraFuncion = (a = 10, b = 5) => {
  console.log( a + b);
  return a + b
}
/* 1.1 Ejecuta esta función sin pasar ningún parametro */
const resultado = primeraFuncion();
console.log(resultado);

/* 1.2 Ejecuta esta función pasando un solo parametro */
const resultadoSoloUnParam = primeraFuncion(3);
console.log(resultadoSoloUnParam)

/* 1.3 Ejecuta esta función pasando dos parametros */
const resultadoDosParam = primeraFuncion(3,4);
console.log(resultadoDosParam);

/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const {title, year} = game;
console.log(title,year)

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. ?? */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};



/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const { name, itv} = car;
console.log('el name es ' + name + ' y el itv ' + itv);
console.log(...itv)


/* 3.1 Dado el siguiente array, crea una copia usando spread operators. */
const pointsList3 = [32, 54, 21, 64, 75, 43];

const arrayCopiado = [...pointsList3];
console.log(arrayCopiado);

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators. */
const toy3 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
 const { name3,date,color} = toy3;
/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newObject = {...toy, ...toyUpdate};
console.log(newObject)

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopi = [...colors];
console.log(colorsCopi.splice(2,1));
console.log(colorsCopi);


/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users4 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

users.map(user => {
  return user.name
})

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users5 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
users5.map(user => {
  console.log(user.name);
  if(user.name.startsWith('A')) {
    user.name = 'Anacleto';
  }
})

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

cities.map(ciudad => {
  if(ciudad.isVisited){
    ciudad.name += ' (Visitado)';
  }
})
console.log(cities);

/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesOver18 = ages.filter(item => item > 18 ? true : false);
console.log(agesOver18)
console.log(ages);

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agespares = ages2.filter(item => {
 return item % 2 ? false : true
})
console.log(agespares);

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLegends = streamers.filter(item => {
  return item.gameMorePlayed === 'League of Legends' ? true : false;
});
console.log(streamersLegends);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */

const arrayWithU = streamers.filter(stremer => stremer.name.includes('Legends') ? true : false);
console.log(arrayWithU);


/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const arrayWithLegends = streamers.filter( stremer => {
  if(stremer.age > 15){
    stremer.gameMorePlayed.toUpperCase();
  }
 return stremer.gameMorePlayed.includes('Legends') ? true : false
});
console.log(arrayWithLegends);


/* 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.*/
const numbers = [32, 21, 63, 95, 100, 67, 43]; 

const n50 = numbers.find( number => number == 100);
console.log(n50);


/* 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010. */
const movies6 = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const pelicula2010 = movies6.find(item => {
  return item.date === 2010 ? item : ``;
})


// no entiendo esta ...porque pelicula2011 sigue devolviendo el objeto {} ??
const pelicula2011 = movies6.find(item => {
  return item.date === 2010 ? 'La película es' + item.title : ``;
})
console.log(pelicula2011);