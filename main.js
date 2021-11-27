const grupos = ['grupoA', 'grupoB', 'grupoC', 'grupoD'];
const materias = ['Matematicas', 'Español', 'Geografia', 'Ingles', 'Sociales'];
const data = {
    alumnosData: []
};
let respuesta = true;
do {
    const dataAlumno = {
        calificaciones: {}
    };
    dataAlumno['nombre'] = prompt('Nombre del alumno: ');
    dataAlumno['grupo'] = prompt('Grupo del alumno: ');
    dataAlumno['promedio'] = 0;
    for (let materia of materias) {
        const calificacion = Number(prompt(`Calificación de ${materia}: `));
        dataAlumno['promedio'] += calificacion;
        dataAlumno.calificaciones[materia.replace('ñ', 'n').toLocaleLowerCase()] = calificacion;
    }
    dataAlumno['promedio'] = dataAlumno['promedio'] / materias.length;
    dataAlumno['status'] = dataAlumno['promedio'] < 7 ? 'Reprobo' : 'Aprobo';
    data.alumnosData.push(dataAlumno);
    const resp = prompt('Registrar un alumno más?: [s]Si [n]No').toLocaleLowerCase();
    respuesta = resp === 's' ? true : false;
} while(respuesta);


const resumen = {};

// alumnos por grupo
for(let alumno of data.alumnosData) {
    console.log(alumno)
    const infoAlumno = `${alumno.nombre} ${alumno.promedio} ${alumno.status}`;
    let califAlumno = ``;
    for (let materia of materias) {
        califAlumno += `${materia}: ${alumno.calificaciones[materia.replace('ñ', 'n').toLocaleLowerCase()]} \n`;
    }
    califAlumno += `\n`;
    if(resumen[alumno.grupo] === undefined) {
        resumen[alumno.grupo] = [];
    }
    resumen[alumno.grupo].push({infoAlumno: infoAlumno, califAlumno: califAlumno, promedio: alumno.promedio});
}

const keysGrupos = Object.keys(resumen); // ['grupoA', 'grupoC',...'grupoN']
console.log('llaves de grupos: ', keysGrupos);

// promedio por grupo
for (let grupo of keysGrupos) {
    const grupoAlumnos = resumen[grupo];
    const totAlumGrupo = grupoAlumnos.length;
    let promGrupo = 0;
    for (let alumno of grupoAlumnos) {
        promGrupo += alumno.promedio;
    }
    promGrupo = promGrupo / totAlumGrupo;
    resumen[grupo].promedioTotal = promGrupo;
}

const promMaterias = {};

// promedio por materia
for(let alumno of data.alumnosData) {
    for (let materia of materias) {
        if (promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()] === undefined) {
            promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()] = [];
        }
        promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()].push(alumno.calificaciones[materia.replace('ñ', 'n').toLocaleLowerCase()])
    }
}
resumen['promedioMaterias'] = {};
for (let materia of materias) {
    let promTotal = 0;
    for (let calif of promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()]) {
        promTotal += calif;
    }
    resumen.promedioMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()] = promTotal / promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()].length;
}


console.log('data: ', data);
console.log('resumen: ', resumen);
