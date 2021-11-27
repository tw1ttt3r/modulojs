let nombre = 'Pedro';
let nombreApePaterno = nombre + 'Fragoso';
// nombre += 'Fragoso';
let nombreComple = nombreApePaterno + 'Maldonado';
// nombre += 'Maldonado';


function nombreCompleto(nombre, apellidos) {
    return nombre +''+ apellidos;
}

let completo = nombreCompleto(nombre, 'Fragoso Maldonado')

function dobleNumero(numero) {
    return numero * 2;
}
let numero1 = 10;
let numeroDoble = dobleNumero(numero1); //20
numero500 = 10;
let numeroDoble500 = dobleNumero(numero500)  // 20


function hola(palabra) {
    return palabra
}

function saludo(principio, palabra) {
    return principio(palabra)
}

console.log(saludo(hola,'pedro'))

// map: retornar el mismo número de elementos que el arreglo que incovo el map

const numeros = [5,8,9,10,34,56];
// const numerosMitad = [];

// for (let i=0; i < numeros.length; i++) {
//     numerosMitad.push(numeros[i]/2);
// }

const numerosMitad = numeros.map( (numero) => numero/2); // [2.5, 4, 4.5, 5, 17, 28]

// iteracion 0
// valor = 5
// posicion = 0
// array = [5,8,9,10,34,56]

// return 2.5

// iteracion 1
// valor = 8
// posicion = 1
// array = [5,8,9,10,34,56]

// return 4

// iteracion 2
// valor = 9
// posicion = 2
// array = [5,8,9,10,34,56]

// return 4.5

// iteracion 3
// valor = 10
// posicion = 3
// array = [5,8,9,10,34,56]

// return 5

// iteracion 4
// valor = 34
// posicion = 4
// array = [5,8,9,10,34,56]

// return 17

// iteracion 5
// valor = 56
// posicion = 5
// array = [5,8,9,10,34,56]

// return 28

const nombres = ['Pedro', 'Javier', 'Cecilia', 'Gabriela'];
// a:4, e:3, i:1, o:0, u:6

// function validaCaracter(caracter, nombreActual) {
//     const vocales = ['a', 'e', 'i', 'o', 'u'];
//     const replaces = ['4', '3', '1', '0', '6'];
//     if (!vocales.includes(caracter)) {
//         return [ ...nombreActual, caracter ];
//     }
//     return [ ...nombreActual, replaces[vocales.indexOf(caracter)] ];
// }

// const nuevosNombres = nombres.map( (nombre, indice) => {
//     const nuevoNombre = [];
//     for(let caracter of nombre) {
//         nuevoNombre = [ ...validaCaracter(caracter, nuevoNombre) ]
//     }
//     return nuevoNombre;
// });

// console.log(nuevosNombres);


// filter: regresa un arreglo pero no tiene que ser del mismo numero de elemento que el arreglo que lo invoco

const numerosIniciales = [5,8,9,10,34,56];

// obtener solo los numeros pares

const numerosPares = numerosIniciales.filter((value) => {
    if (value % 2 === 0) {
        return value;
    }
}); // [8, 10, 34, 56]


// iteracion 0
// value = 5
// posicion = 0
// array = [5,8,9,10,34,56]

// iteracion 1
// value = 8
// posicion = 1
// array = [5,8,9,10,34,56]

// return 8

// iteracion 2
// value = 9
// posicion = 2
// array = [5,8,9,10,34,56]

// iteracion 3
// value = 10
// posicion = 3
// array = [5,8,9,10,34,56]

// return 10

// iteracion 4
// value = 34
// posicion = 4
// array = [5,8,9,10,34,56]

// return 34

// iteracion 5
// value = 56
// posicion = 5
// array = [5,8,9,10,34,56]

// return 56



const alumnos = [
    {
        nombre: 'Saul',
        grupo: 'A',
        promedio: 9
    },
    {
        nombre: 'Ramiro',
        grupo: 'A',
        promedio: 10
    },
    {
        nombre: 'Santiago',
        grupo: 'C',
        promedio: 8.5
    },
    {
        nombre: 'Mariano',
        grupo: 'D',
        promedio: 7
    },
    {
        nombre: 'Sandra',
        grupo: 'B',
        promedio: 7.5
    },
];

// Todos los alumnos de grupo A

const alumnosGrupoA = alumnos.filter( (alumno) => {
    if (alumno.grupo === 'A') {
        return alumno
    }
});


console.log(alumnosGrupoA)

// Alumnos que aprobaron del grupo A (promedio mayor a 6)
const alumnosAprobadosGrupoA = alumnosGrupoA.filter( (alumno) => {
    if (alumno.promedio > 6) {
        return alumno
    }
})

console.log(alumnosAprobadosGrupoA)


// reduce: combinacion entre map y filter, opera los valores del arreglo pero tambien me permite filtar pero además
// me puede regresar un tipo de dato diferente arreglo


// const alumnos = [
    // {
    //     nombre: 'Saul',
    //     grupo: 'A',
    //     promedio: 9
    // },
    // {
    //     nombre: 'Ramiro',
    //     grupo: 'A',
    //     promedio: 10
    // },
//     {
//         nombre: 'Santiago',
//         grupo: 'C',
//         promedio: 8.5
//     },
    // {
    //     nombre: 'Mariano',
    //     grupo: 'D',
    //     promedio: 7
    // },
    // {
    //     nombre: 'Sandra',
    //     grupo: 'B',
    //     promedio: 7.5
    // },
// ];


const promedioTotal = alumnos.reduce( (previuosValue,value, posicion, arreglo) => {
    return previuosValue += value.promedio;
}, 0) / alumnos.length;  // 42/5   // 8.4


// iteracion 0
// previuosValue = 0
// value =     {
    //     nombre: 'Saul',
    //     grupo: 'A',
    //     promedio: 9
    // },
// posicion = 0
// array = alumnos

// return 9

// iteracion 1
// previuosValue = 19
// value =     {
    //     nombre: 'Ramiro',
    //     grupo: 'A',
    //     promedio: 10
    // },
// posicion = 1
// array = alumnos

// return 19

// iteracion 2
// previuosValue = 19
// value =     {
    //     nombre: 'Santiago',
    //     grupo: 'C',
    //     promedio: 8.5
    // },
// posicion = 2
// array = alumnos

// return 27.5

// iteracion 3
// previuosValue = 27.5
// value =     {
    //     nombre: 'Mariano',
    //     grupo: 'D',
    //     promedio: 7
    // },
// posicion = 3
// array = alumnos

// return 34.5

// iteracion 4
// previuosValue = 34.5
// value =     {
    //     nombre: 'Sandra',
    //     grupo: 'B',
    //     promedio: 7.5
    // },
// posicion = 4
// array = alumnos

// return 42
