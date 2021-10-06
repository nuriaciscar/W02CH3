/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
function calculadoraPro() {
    let newNumber;
    const numberList = [];
    let resultSum;
    let resultRest;
    let resultMult;
    let resultDiv;

    do {
        newNumber = prompt(
            "Introduzca un número o presiona cancel para detener"
        );
        if (!Number.isNaN(newNumber) && newNumber !== "" && newNumber != null) {
            numberList.push(parseFloat(newNumber));
        } else {
            window.alert("No válido. Porfavor introduzca otro número");
        }
    } while (newNumber !== null);

    // raíz cuadrada
    let raiz = Math.sqrt(numberList[0]);
    raiz = raiz.toFixed(3);

    if (numberList.length === 1) {
        // Si es un solo numero mostramos solo la raíz cuadrada
        window.alert(`La raíz cuadrada de ${numberList[0]} es ${raiz}.`);
    } else if (numberList.length > 1) {
        // Si es más de 1 hacemos suma, resta, multiplicación y división
        resultSum = numberList[0];
        resultRest = numberList[0];
        resultMult = numberList[0];
        resultDiv = numberList[0];

        for (let i = 1; i < numberList.length; i++) {
            resultSum += numberList[i];
            resultRest -= numberList[i];
            resultMult *= numberList[i];
            resultDiv /= numberList[i];
        }
    }

    // Reproducimos el resultado en la máquina
    if (numberList.length > 1) {
        window.alert(
            `El resultado de la suma es ${resultSum.toFixed(
                3
            )} \n El resultado de la resta es ${resultRest.toFixed(
                3
            )} \n El resultado de la multiplicación es ${resultMult.toFixed(
                3
            )} \n El resultado de la división es ${resultDiv.toFixed(3)}`
        );
    }

    // Preguntar si desea volver a realizar otra operación
    if (confirm("¿Desea realizar más operaciones?")) {
        calculadoraPro();
    } else {
        window.alert("¡Adiós!");
    }
}

calculadoraPro();
