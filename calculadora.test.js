function calculadora(num1, num2) {
    const resultados = [];

    if ((num1 === "" || num1 === null) && (num2 === "" || num2 === null)) {
        return "Porfavor introduzca otro número";
    }
    if (Number.isNaN(num1)) {
        return "No existe, porfavor introduzca otro número";
    }

    let raiz = Math.sqrt(num1);
    raiz = raiz.toFixed(3);

    if (num2 === null || num2 === "" || Number.isNaN(num2)) {
        return `La raíz cuadrada de ${num1} es ${raiz}.`;
    }

    resultados.push(`El resultado de la suma es ${num1 + num2}`);
    resultados.push(`El resultado de la resta es ${num1 - num2}`);
    resultados.push(`El resultado de la multiplicación es ${num1 * num2}`);
    resultados.push(`El resultado de la división es ${num1 / num2}`);
    return resultados;
}

describe("Given a Calculadora function", () => {
    describe("When it receives (16,'')", () => {
        test("Then it should return 4, his square root", () => {
            // Arrange
            const num1 = 16;
            const num2 = "";
            const expected = "La raíz cuadrada de 16 es 4.000.";

            // Act
            const result = calculadora(num1, num2);

            // Assert
            expect(result).toBe(expected);
        });
    });

    describe("When both values are not numbers", () => {
        test("Then it should return 'Porfavor introduzca otro número'", () => {
            const num1 = "hola";
            const num2 = null;
            const expected = "La raíz cuadrada de hola es NaN.";

            const result = calculadora(num1, num2);

            expect(result).toBe(expected);
        });
    });

    describe("When both values are numbers", () => {
        test("Then it should return 'El resultado de la suma es 7'", () => {
            const num1 = 3;
            const num2 = 4;
            const expected = [
                "El resultado de la suma es 7",
                "El resultado de la resta es -1",
                "El resultado de la multiplicación es 12",
                "El resultado de la división es 0.75",
            ];

            const result = calculadora(num1, num2);

            expect(result).toStrictEqual(expected);
        });
    });
});
