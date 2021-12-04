// Selecciones de nodos a partir de sus atributos

// ID
// getElementByID(<string del ID>)
// querySelector(<string del selector de ID>)

const sectionPrincipal = document.querySelector('#wrapper');

console.log(sectionPrincipal);


// CLASES
// getElementsByClassName(<string de la CLASE>)
// querySelectorAll(<string del selector de la CLASE>)
const allContainers = document.querySelectorAll('.container');

console.log(allContainers);

const nuevoArreglo = Array.from(allContainers);

console.log(nuevoArreglo)

// Obtener solo los elementos que tengan imagen

const soloImagenes = nuevoArreglo.filter( (value, index, array) => {
    if (value.children.length > 0) {
        if (value.children[0].tagName === 'IMG'){
            return value
        }
    }
});

console.log(soloImagenes)