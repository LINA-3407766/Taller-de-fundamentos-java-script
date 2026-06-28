// Ejercicio 4 - Reporte semanal de ventas

const ventas = [
    { dia: "Lunes", vendedor: "Juan", unidades: 8, totalVendido: 250000 },
    { dia: "Martes", vendedor: "Yoselin", unidades: 12, totalVendido: 420000 },
    { dia: "Miércoles", vendedor: "Pedro", unidades: 15, totalVendido: 510000 },
    { dia: "Jueves", vendedor: "Rossana", unidades: 9, totalVendido: 300000 },
    { dia: "Viernes", vendedor: "Maikol", unidades: 18, totalVendido: 650000 }
];

// Función para calcular el total vendido en la semana
function calcularTotalSemana() {

    let total = ventas.reduce(function(acumulador, venta) {
        return acumulador + venta.totalVendido;
    }, 0);

    return total;
}

// Función para encontrar el día con mayor venta
function encontrarMayorVenta() {

    let mayor = ventas.reduce(function(acumulador, venta) {

        if (venta.totalVendido > acumulador.totalVendido) {
            return venta;
        } else {
            return acumulador;
        }

    });

    return mayor;
}

// Función para filtrar los días con más de 10 unidades
function diasDestacados() {

    let destacados = ventas.filter(function(venta) {
        return venta.unidades > 10;
    });

    return destacados;
}

// Función para mostrar el reporte completo
function imprimirReporte() {

    console.log("REPORTE SEMANAL");

    console.log("");

    console.log("Total vendido: $" + calcularTotalSemana().toLocaleString("es-CO"));

    let mayor = encontrarMayorVenta();

    console.log("Día con mayor venta: " + mayor.dia);
    console.log("Vendedor: " + mayor.vendedor);
    console.log("Valor vendido: $" + mayor.totalVendido.toLocaleString("es-CO"));

    console.log("---------------------------");
    console.log("Días con más de 10 unidades:");

    let destacados = diasDestacados();

    for (const venta of destacados) {

        console.log(
            venta.dia +
            " - " +
            venta.vendedor +
            " - " +
            venta.unidades +
            " unidades"
        );

    }

}

// Llamar la función principal
imprimirReporte();