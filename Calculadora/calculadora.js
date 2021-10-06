module_exports = calculadora();

// Inicio calculadora

const resultados = [];

// Calculadora

function calculadora(num1, num2) {
    if ((num1 === "" || num1 === null) && (num2 === "" || num2 === null)) {
        return "Porfavor introduzca otro número";
    }
    if (Number.isNaN(num1)) {
        return "No existe, porfavor introduzca otro número";
    }

    let raiz = Math.sqrt(num1);
    raiz = raiz.toFixed(3); // Redondear a 3 decimales

    if (num2 === null || num2 === "" || Number.isNaN(num2)) {
        return `La raíz cuadrada de ${num1} es ${raiz}.`;
    }

    resultados.push(`El resultado de la suma es ${num1 + num2}`);
    resultados.push(`El resultado de la resta es ${num1 - num2}`);
    resultados.push(`El resultado de la multiplicación es ${num1 * num2}`);
    resultados.push(`El resultado de la división es ${num1 / num2}`);
    return resultados;
}

calculadora();

module.exports = calculadora;
