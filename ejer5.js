// Ejercicio 5 - Cooperativa

let nombre = "lina";
let saldo = 500000;
let retiro = 200000;

function procesarRetiro(nombre, saldo, retiro) {

    if (retiro <= 0) {

        return {
            mensaje: "El monto debe ser mayor a cero"
        };

    }

    if (saldo >= retiro) {

        return {
            nombre: nombre,
            saldoAnterior: saldo,
            montoRetiro: retiro,
            nuevoSaldo: saldo - retiro,
            aprobado: true
        };

    } else {

        return {
            nombre: nombre,
            falta: retiro - saldo,
            aprobado: false
        };

    }

}

let resultado = procesarRetiro(nombre, saldo, retiro);

if (resultado.mensaje) {

    console.log(resultado.mensaje);

} else if (resultado.aprobado) {

    console.log("Nombre: " + resultado.nombre);
    console.log("Saldo anterior: $" + resultado.saldoAnterior.toLocaleString("es-CO"));
    console.log("Monto retirado: $" + resultado.montoRetiro.toLocaleString("es-CO"));
    console.log("Nuevo saldo: $" + resultado.nuevoSaldo.toLocaleString("es-CO"));

} else {

    console.log("Nombre: " + resultado.nombre);
    console.log("Saldo insuficiente.");
    console.log("Le faltan $" + resultado.falta.toLocaleString("es-CO") + " para realizar el retiro.");

}
