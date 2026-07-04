// Ejercicio 2 - Gimnasio

let nombre = "lina";
let edad = 17;
let plan = 2;

let nombrePlan = "";
let valorPlan = 0;

switch (plan) {

    case 1:
        nombrePlan = "Básico";
        valorPlan = 80000;
        break;

    case 2:
        nombrePlan = "Estándar";
        valorPlan = 130000;
        break;

    case 3:
        nombrePlan = "Premium";
        valorPlan = 200000;
        break;

    default:
        console.log("Opción no válida");
}

if (plan >= 1 && plan <= 3) {

    let descuento = 0;

    if (edad < 18) {

        descuento = valorPlan * 0.20;

    } else if (edad >= 60 && edad <= 99) {

        descuento = valorPlan * 0.30;

    } else {

        descuento = 0;

    }

    let valorFinal = valorPlan - descuento;

    console.log("Nombre: " + nombre);
    console.log("Plan: " + nombrePlan);
    console.log("Descuento: $" + descuento.toLocaleString("es-CO"));
    console.log("Valor final: $" + valorFinal.toLocaleString("es-CO"));

}
