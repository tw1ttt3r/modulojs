// función: es un bloque de código encapsulado que permite ser ejecutado
// tantas veces el usuario lo requiera a partir del nombre con el que se 
// declare

// declaración 
// function nombredelafuncion(){}

// funcion de saludo

// function saludo() {
//     console.log('Hola Mundo')
// }

// // invocar
// saludo('pedro')

// argumentos o parametros
// son valores que llegan a la funcion para poder ser ocupados
// dentro de la misma

// los argumentos van dentro de los parentesis, van en orden separados
// por una coma

// function saludo(nombre) {
//     console.log('Hola '+ nombre);
// }

// saludo('Gabriela')


// function operacion(numero1, numero2, operacion) {
//     if (operacion === 'suma') {
//         console.log(numero1 + numero2);
//     } else {
//         console.log(numero1 - numero2);
//     }
// }

// operacion(6, 7, '');

// const nombre = prompt('Cual es tu nombre: ')
// const edad = Number(prompt('Cual es tu edad: '))

// console.log('Hola '+ nombre)

// function validacion(nombreUsuario, edadUsuario) {
//     if (edadUsuario > 18) {
//         console.log('Puede votar')
//     } else {
//         const caracter = nombreUsuario[2];
//         switch(caracter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 console.log('Puede votar por esta ocasión');
//                 break;
//             default:
//                 console.log('Lo sentimos, no puede votar')
//         }
//     }
// }

// validacion(nombre, edad);

// console.log('Muchas gracias')

// valores por defecto: son valores que se asignan a los argumentos cuando pueden ser opcionales

// function saludar(nombre='Usuario') {
//     console.log('Hola ' + nombre)
// }

// saludar()

// function operacion(numero1, numero2, operacion='suma', nombre='Pedro', calificacion='8') {
//     console.log(operacion)
//     console.log(numero1)
//     console.log(numero2)
//     if (operacion === 'suma') {
//         console.log(numero1 + numero2);
//     } else {
//         console.log(numero1 - numero2);
//     }
// }

// operacion(6, 7);

// Agencia de viajes al interior de la republica

// Nombre
// Fecha de inicio
// Fecha de termino
// viajar al extranjero
// presupuesto

// const nombre = prompt('Nombre: ')
// const fec_ini = prompt('Fecha de inicio: ')
// const fec_fin = prompt('Fecha de termino: ')
// const extranjero = prompt('Viajas al extranjero: ')
// const presupuesto = Number(prompt('Presupuesto: '))

// function validarExtranjero(nombre, viajeExtranjero=false) {
//     if (!viajeExtranjero) {
//         console.log(`Validaremos su presupuesto con las fechas que nos entrego`)
//         console.log(`Muchas gracias por preferirnos ${nombre}`)
//     } else {
//         console.log(`Lo lamentamos ${nombre} aún no tenemos rutas fuera del país`)
//     }
// }


// regresar valores de la funcion, ocupamos la palabra resevada return por lo cual es la ultima
// línea que se ejecutará de la función

// function hacerSandwich(ingrediente1, ingrediente2, ingrediente3, mayonesa = true) {
//     let sandwich = 'pan superior';
//     sandwich += ingrediente1;
//     sandwich += ingrediente2
//     return sandwich
//     sandwich += ingrediente3
// }


// regresar en el return: cualquier tipo de dato que javascript conozca


// function saludar(nombre) {
//     return `Hola ${nombre}`
// }

// console.log(saludar('Pedro'))
// console.log(saludar('Marina'))
// console.log(saludar('Jacob'))
// console.log(saludar('Irma'))
// console.log(saludar(''))

function estatusAlumno(cal1, cal2, cal3) {
    const promedio = (cal1 + cal2 + cal3) / 3;
    let estatus = 'aprobado';
    if (promedio < 7) {
        estatus = 'reprobado';
    }
    // return [promedio, estatus]
    return { promedio, estatus }
}

// console.log(estatusAlumno(9,9,4))
// console.log(estatusAlumno(7,6,8))
// console.log(estatusAlumno(5,6,3))
const alumno1 = estatusAlumno(9,9,4)
const alumno2 = estatusAlumno(7,6,8)
const alumno3 = estatusAlumno(5,6,3)




