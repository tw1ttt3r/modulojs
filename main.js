// // Selecciones de nodos a partir de sus atributos

// // ID
// // getElementByID(<string del ID>)
// // querySelector(<string del selector de ID>)

// const sectionPrincipal = document.querySelector('#wrapper');

// console.log(sectionPrincipal);


// // CLASES
// // getElementsByClassName(<string de la CLASE>)
// // querySelectorAll(<string del selector de la CLASE>)
// const allContainers = document.querySelectorAll('.container');

// console.log(allContainers);

// const nuevoArreglo = Array.from(allContainers);

// console.log(nuevoArreglo)

// // Obtener solo los elementos que tengan imagen

// const soloImagenes = nuevoArreglo.filter( (value, index, array) => {
//     if (value.children.length > 0) {
//         if (value.children[0].tagName === 'IMG'){
//             return value
//         }
//     }
// });

// console.log(soloImagenes)

// // TAGNAME
// // getElementsByTagName(<string del nombre de la tagname>)
// // querySelectorAll(<string del nombre de la tagname>)

// // seleccionar todos los div

// const allDivs = document.querySelectorAll('div');

// console.log(allDivs)


// Crear nodos

// document.createElement(<string de mi tagname>)

const nuevoBoton = document.createElement('button');
nuevoBoton.textContent = 'Soy un nuevo boton';

// agregar nuevos elementos o nodos

// sectionPrincipal.append(nuevoBoton);

// sectionPrincipal.firstChild.nextSibling.append(nuevoBoton)

// sectionPrincipal.children[1].append(nuevoBoton)


// crear elemento complejos

// const wrapperComponente = document.createElement('div');
// const divisionImg = document.createElement('div');
// const divImage = document.createElement('img');
// divImage.src = 'https://i.pinimg.com/736x/0b/02/f8/0b02f855419cfbd36e7249b275bc955c.jpg';
// divImage.alt = 'foto de usuario';
// divImage.classList.add('profileImage');
// divisionImg.appendChild(divImage);
// const divisionName = document.createElement('div')
// const nameUser = document.createTextNode('Maria');
// divisionName.appendChild(nameUser);
// wrapperComponente.appendChild(divisionImg)
// wrapperComponente.appendChild(divisionName)

// sectionPrincipal.children[0].append(wrapperComponente);

// sectionPrincipal.children[0].classList.remove('container');


function changeAction(e) {
    console.log(e)
    const childs = Array.from(e.target.parentNode.previousSibling.children).reduce((previous, current) => {
        previous[current.tagName.toLowerCase()] = current;
        return previous;
    }, {});
    if (e.target.textContent === 'editar') {
        e.target.nextSibling.disabled = false;
        const editBio = childs.p.textContent;
        childs.textarea.value = editBio;
        childs.textarea.style.display = 'block';
        childs.p.style.display = 'none';
    } else {
        e.target.previousSibling.disabled = false;
        const newBio = childs.textarea.value;
        childs.textarea.style.display = 'none';
        childs.p.textContent = newBio;
        childs.p.style.display = 'block';
        childs.textarea.value = '';
    }
    e.target.disabled = true;
}

const wrapperCard = document.createElement('div');
wrapperCard.classList.add('cardStyle');

const wrapperImage = document.createElement('div');

const imageProfile = document.createElement('img');
imageProfile.src = 'https://i.pinimg.com/736x/0b/02/f8/0b02f855419cfbd36e7249b275bc955c.jpg';
imageProfile.alt = 'foto de usuario';
imageProfile.classList.add('profileImage');
wrapperImage.appendChild(imageProfile);
wrapperCard.appendChild(wrapperImage);

const wrapperName = document.createElement('div');
const nameProfile = document.createElement('p');
nameProfile.textContent = 'Maria Hernandez';
wrapperName.appendChild(nameProfile);
wrapperCard.appendChild(wrapperName);


const wrapperBio = document.createElement('div');
wrapperBio.classList.add('profileBio');
const bioProfile = document.createElement('p');
const bio = `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?

Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

`;
bioProfile.textContent = bio;
const bioEdit = document.createElement('textarea');
bioEdit.style.display = 'none';
bioEdit.value = bio;
wrapperBio.appendChild(bioEdit);
wrapperBio.appendChild(bioProfile);
wrapperCard.appendChild(wrapperBio);

const wrapperActions = document.createElement('div');
wrapperActions.classList.add('actionsStyle');
const action1 = document.createElement('button');
action1.textContent = 'editar'
action1.addEventListener('click', changeAction)
const action2 = document.createElement('button');
action2.textContent = 'guardar'
action2.addEventListener('click', changeAction)
action2.disabled = true
wrapperActions.appendChild(action1);
wrapperActions.appendChild(action2);
wrapperCard.appendChild(wrapperActions);

document.body.append(wrapperCard);