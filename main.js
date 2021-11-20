// Estructuras de datos

// Arreglos: estrucuras secuenciales
// ordenados por índices númericos iniciando
// en 0 y terminado en n-1, donde n es el total de elementos

// [1,2,3,4,5,6,7,8,9,0]

// declarar Arreglos
// const alumnos = []
const alumnos = ['Pedro', 'Maria']

// Puedo obtener un valor de mi arreglo
console.log(alumnos[1]) // Maria
console.log(alumnos[2]) // undefined

// Puedo agregar valores
alumnos.push('Armando') // 2
alumnos.push('Lucia') // 3
alumnos.push('Sergio') // 4

console.log(alumnos)

// modificar valores
alumnos[3] = 'Roman'

console.log(alumnos)

console.log(alumnos.length)


// eliminar elementos de arreglo

delete alumnos[3]

console.log(alumnos)
console.log(alumnos[3]) // Sergio
console.log(alumnos[4]) // Sergio

// pop => me entrega el ultimo elemento del arreglo y lo elimina del arreglo

const alumnoEliminado = alumnos.pop() // Sergio

console.log(alumnos[4]) // Sergio
console.log(alumnos)

// splice
// inicio, posicionAEliminar, elemento1,elemento2,....,elementon

alumnos.splice(2,0,'Rogelio')

console.log(alumnos)

alumnos.splice(3,2)

console.log(alumnos)

// obtener el total de elementos

console.log(alumnos.length)

// recorrer un arreglo

for (let i = 0; i < alumnos.length; i++ ) {
    console.log(alumnos[i])
}