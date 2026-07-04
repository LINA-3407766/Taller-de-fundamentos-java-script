// Ejercicio 3 - Rendimiento de estudiantes

const estudiantes = [
    { nombre: "Laura", nota: 4.5 },
    { nombre: "alex", nota: 3.2 },
    { nombre: "yissela", nota: 5.0 },
    { nombre: "miguel", nota: 2.8 },
    { nombre: "dulce", nota: 4.0 },
    { nombre: "santiago", nota: 3.6 }
];

let suma = 0;
let mayor = estudiantes[0].nota;
let menor = estudiantes[0].nota;
let aprobados = 0;

for (const estudiante of estudiantes) {

    let estado;

    if (estudiante.nota >= 3.5) {
        estado = "APROBADO";
        aprobados++;
    } else {
        estado = "REPROBADO";
    }

    console.log("Nombre: " + estudiante.nombre);
    console.log("Nota: " + estudiante.nota);
    console.log("Estado: " + estado);
    console.log("-----------------------");

    suma = suma + estudiante.nota;

    mayor = Math.max(mayor, estudiante.nota);
    menor = Math.min(menor, estudiante.nota);
}

let promedio = suma / estudiantes.length;

console.log("Promedio del grupo: " + promedio);
console.log("Nota más alta: " + mayor);
console.log("Nota más baja: " + menor);
console.log("Estudiantes aprobados: " + aprobados);