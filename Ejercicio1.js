// Ejercicio 1

let nombre = "Vanessa";
let peso = 4;
let ciudad = "Bogotá";

let tarifa;

if (peso < 2) {
    tarifa = 8000;
} else if (peso <= 5) {
    tarifa = 15000;
} else {
    tarifa = 25000;
}

let recargo = ciudad == "Bogotá" ? 5000 : 0;

let total = tarifa + recargo;

console.log("Nombre: " + nombre);
console.log("Ciudad: " + ciudad);
console.log("Peso: " + peso + " kg");
console.log("Tarifa: $" + tarifa.toLocaleString("es-CO"));
console.log("Recargo: $" + recargo.toLocaleString("es-CO"));
console.log("Total: $" + total.toLocaleString("es-CO"));