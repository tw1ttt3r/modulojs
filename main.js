// estructura de control

// condicionales
// if 

// if() {}

// condicionales
// ==  valor
// === valor y tipo
// != diferente a nivel valor
// !== diferente a nivel valor y tipo
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que


// logicos
// && y
// || o
// ! negacion


// if sencillo
// if (true) {}

// if else
//if (true) {} else {}

// if else if
// if (true) {} else if (true) {} else {}

// if anidados
// if (true) {
//     if (true) {
//         if (true) {}
//     }
// }

// switch 
// valor de comparacion
// una lista de casos con un valor

switch(delegacion) {
    case 'Azcapotzalco':
    case 'Benito Juárez':
        // to do
        break;
    case 'Coyoacán':
        break;
    default:
        // si no existe en la lista de casos
}

let operacion = '';
let numero1=4;
let numero2=8;

switch(operacion) {
    case 'suma':
        console.log(numero1 + numero2)
        break;
    case 'resta':
        console.log(numero1 - numero2)
        break;
    case 'multiplicacion':
        console.log(numero1 * numero2)
        break;
    case 'division':
        console.log(numero1 / numero2)
        break;
    default:
        console.log('operacion no valida')
}

// while: mientras la condicion se cumpla ejecutare el código

// while (condicion) {}

let numero = 10;

while(numero !== 0) {
    console.log(numero);
    numero--;
}

// do while: va ejecutar el do una primera vez y luego
// mientras la condicion se cumpla ejecutara el código

let numero2 = 20;

do {
    numero2 = numero2 / 2;
    console.log(numero2);
} while(numero2 !== 0)


// como pueden tomar datos del usuario
// prompt

// declarar una variable
// funcion prompt
// const nombre = prompt('cual es tu nombre');

// tipo de dato de regreso es un string

// for,  se va a ejecutar hasta que la condicion sea cumpla

// for(iniciacion; condicion; incremento) {}
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

const nombreEjercicio = prompt('Proporcion aun nombre:') // esmeralda // 9
let nuevoNombre='';
for(let i=0; i < nombreEjercicio.length; i++) {
    // nombreEjercicio[9] // a
    switch(nombreEjercicio[i]) {
        case 'a':
            nuevoNombre += 1 // nuevoNomber // 2sm2r1ld1
            break;
        case 'e':
            nuevoNombre += 2 //nuevoNombre // 2sm2
            break;
        case 'i':
            nuevoNombre += 3
            break;
        case 'o':
            nuevoNombre += 4
            break;
        case 'u':
            nuevoNombre += 5
            break;
        default:
            nuevoNombre += nombreEjercicio[i] // 2smr1ld
            /// el caracter es una consonante
    }
}
console.log(nuevoNombre) // 2sm2r1ld1
console.log('Muchas gracias por ocuparlo')
