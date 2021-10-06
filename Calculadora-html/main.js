/* eslint-disable no-console */
// Selectores HTML
const botonNumeros = document.querySelectorAll(".numero"); // Todos los numeros
const botonBorrar = document.getElementById(".ac"); // Boton de borrar
const botonOperador = document.getElementById("operador");
const botonResultado = document.getElementById(".igual");

const pantalla = document.getElementById("resultado");

// Estado
let operacionActual = "";
let operacionAnterior = ""; // La guardamos para poder hacer más de una operación
let operacion;

function calcular() {
    let calculo;
    const a = parseFloat(operacionAnterior);
    const b = parseFloat(operacionActual);
    if (Number.isNaN(a) || Number.isNaN(b)) return; // Si son numericos los dos

    switch (operacion) {
        case "+":
            calculo = a + b;
            break;
        case "-":
            calculo = a - b;
            break;
        case "x":
            calculo = a * b;
            break;
        case "÷":
            calculo = a / b;
            break;
        case "%":
            calculo = a % b;
            break;
        default:
            console.log("Error");
            return;
    }
    operacionActual = calculo;
    operacion = "";
    operacionAnterior = "";
}

function limpiar() {
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
}

function tipoOperacion(op) {
    if (operacionActual === "") {
        return;
    }
    calcular();

    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}

limpiar();

function actualizarValor() {
    pantalla.value = operacionActual;
}

function añadirNumero(num) {
    // Creamos una variable num
    if (num === "." && operacionActual.includes(".")) return;
    operacionActual = operacionActual.toString() + num.toString(); // Lo pasamos a texto
    actualizarValor();
}

botonNumeros.forEach((boton) => {
    boton.addEventListener("click", () => {
        añadirNumero(boton.innerText);
    });
});

botonOperador.forEach((boton) => {
    boton.addEventListener("click", () => {
        tipoOperacion(boton.innerText);
    });
});

botonResultado.addEventListener("click", () => {
    calcular();
    actualizarValor();
});

botonBorrar.addEventListener("click", () => {
    limpiar();
    actualizarValor();
});
