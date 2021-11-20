// Estructuras de datos

// Arreglos: estrucuras secuenciales
// ordenados por índices númericos iniciando
// en 0 y terminado en n-1, donde n es el total de elementos

// [1,2,3,4,5,6,7,8,9,0]

// declarar Arreglos
// const alumnos = []
// const alumnos = ['Pedro', 'Maria']

// Puedo obtener un valor de mi arreglo
// console.log(alumnos[1]) // Maria
// console.log(alumnos[2]) // undefined

// Puedo agregar valores
// alumnos.push('Armando') // 2
// alumnos.push('Lucia') // 3
// alumnos.push('Sergio') // 4

// console.log(alumnos)

// modificar valores
// alumnos[3] = 'Roman'

// console.log(alumnos)

// console.log(alumnos.length)


// eliminar elementos de arreglo

// delete alumnos[3]

// console.log(alumnos)
// console.log(alumnos[3]) // Sergio
// console.log(alumnos[4]) // Sergio

// pop => me entrega el ultimo elemento del arreglo y lo elimina del arreglo

// const alumnoEliminado = alumnos.pop() // Sergio

// console.log(alumnos[4]) // Sergio
// console.log(alumnos)

// splice
// inicio, posicionAEliminar, elemento1,elemento2,....,elementon

// alumnos.splice(2,0,'Rogelio')

// console.log(alumnos)

// alumnos.splice(3,2)

// console.log(alumnos)

// obtener el total de elementos

// console.log(alumnos.length)

// recorrer un arreglo

// for (let i = 0; i < alumnos.length; i++ ) {
//     console.log(alumnos[i])
// }

// objetos: son estructuras que se basan en llave-valor propiedades y valores
// tenemos acciones propias del objeto es decir tenemos metodos.

// declaracion de un objeto

// const persona = {};

// // agregar valores a un objeto
// persona['nombre'] = 'Sergio';

// // obtener valor de una propiedad

// // acceder a la propiedad atraves del operador .
// persona.nombre // Sergio

// persona['nombre'] // Sergio

// // eliminar propiedades
// delete persona.nombre
// delete persona['nombre']


// ejemplo

// mexico = {
//     comida: 'chilaquiles',
//     idioma: 'español',
//     estados: ['Chihuahua', 'CDMX'],
//     ultimoPresidente: 'AMLO',
// }


// // preguntar que quiero saber de México
// // idioma
// // comida
// // estados
// // ultimoPresidente

// const respuesta = prompt('Que quieres saber: ')

// console.log(mexico[respuesta])



// metodos:  son acciones del objeto

// funciones anonimas: no tener un nombre, por ende solo las puedo ejecutar una sola vez
// almacenar en una variable para poder ejecutarla mas de una vez


// ES5 function() {}
// ES6 () => {}, return implicito
// numero => numero*2
// _ => {}
// _ => {  return algo }

// persona.caminar = () => {
//     console.log('Persona esta caminando')
// }

// persona.caminar() // Persona esta caminando

// persona.presentar = (nombre) => `Soy ${nombre}`

// persona.presentar(persona.nombre)



// ejemplo

const alumnos = [];
const materias = ['Matematicas', 'Historia', 'Sociales', 'Artes']
let respuesta = 's';

do {
    const datosAlumno = {};
    let promedio = 0;
    datosAlumno.nombre = prompt('Nombre del alumno')
    for(let i=0; i < materias.length; i++) {
        datosAlumno[materias[i].toLowerCase()] = Number(prompt(`Calificacion de ${materias[i]}`))
        promedio += datosAlumno[materias[i].toLowerCase()];
    }
    datosAlumno.promedio = promedio / materias.length;
    datosAlumno.estatus = datosAlumno.promedio > 7 ? 'Aprobo' : 'Reprobo';
    alumnos.push(datosAlumno)
    respuesta = prompt('Agregar nuevo registro: s[Si] n[No]').toLowerCase()

} while(respuesta === 's')

for(let i = 0; i < alumnos.length; i++) {
    let resultado = `El alumno ${alumnos[i].nombre} con calificaciones \n`;
    for(let j=0; j < materias.length; j++) {
        resultado += `${materias[j]}: ${alumnos[i][materias[j].toLowerCase()]} \n`
    }
    resultado += `${alumnos[i].estatus}`;
    console.log(resultado)
}