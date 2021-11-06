// constantes
//const

// variables
// let 

// eS5
// var


// tipos de datos

// string
// cadenas de caracteres

let nombre = "Juan";

let longitud = nombre.length;
let caracter = nombre[0];
let apellido = "Perez";
let nombreCompleto = nombre + " " + apellido;
// number
// numeros enteros y decimales

let edad = 30;
let peso = 75.5;

// suma
let suma = edad + peso;
// resta
let resta = edad - peso;
// multiplicacion
let multiplicacion = edad * peso;
// division
let division = edad / peso;


// boolean
// valores true y false
let verdadero = true;
let falso = false;

// null
// valores vacios pero que existen
let valor = null;

// undefined
// valores que no existen
let noExiste;


// operador typeof


// comparacion
2 == '2'

// = operacion de asignacion

// == operacion de comparacion por valor

// === operacion de comparacion por valor y tipo de dato

// coerción => conversion de tipo de dato a otro

// convertir un numero a string
// declarativa String()
// implicita valor+''

// convertir boolean a string
// declarativa String()
// implicita valor+''

// convertir string a numero
// declarativa Number()


// valores trly y falsy
// implicita ocupamos los !

let valorAPI;

if (valorAPI !== undefined) {
    console.log('existe');
}

if (!!valorAPI) {
    console.log('existe');
}


// console.log, permite observar en consola un mensaje
// console.log()