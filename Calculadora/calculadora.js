//Inicio calculadora

let resultados = [];
let num1 = parseFloat(prompt('Porfavor introduzca un primer número'));
let num2 = parseFloat(prompt('Porfavor introduzca un segundo número'));

//Raiz cuadrada
let raiz = Math.sqrt(num1);
raiz = raiz.toFixed(3); //Redondear a 3 decimales 


//Division, aparte porque tambien tiene hasta 3 decimales 
let div = (num1 / num2);
div = div.toFixed(3);


//Calculadora

function calculadora(val1,val2){

if ((num1 === ""||num1 === null) && (num2 === ""||num2 === null)){ 
    console.log('Porfavor introduzca otro número');
  } else if (isNaN(num1)){
    console.log('No existe, porfavor introduzca otro número');
  } else if (num2 === null||num2 === ""||isNaN(num2)){
    console.log(`La raíz cuadrada de ${num1} es ${raiz}.`);
  }
  else{
    resultados.push(`El resultado de la suma es ${num1 + num2}`);
    resultados.push(`El resultado de la resta es ${num1 - num2}`);
    resultados.push(`El resultado de la multiplicación es ${num1 * num2}`);
    resultados.push(`El resultado de la división es ${num1 / num2}`);
    console.log(resultados);
  }

}

calculadora(num1,num2);