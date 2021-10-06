
//Selectores HTML
const botonNumeros=document.querySelectorAll('.numero'); //Todos los numeros
const botonBorrar= document.getElementById('.ac'); //TBoton de borrar
const botonOperador= document.getElementById('operador');
const botonResultado= document.getElementById('.igual');

let pantalla= document.getElementById('resultado'); 


//Estado
let operacionActual= '';
let operacionAnterior= ''; //La guardamos para poder hacer más de una operación
let operacion= undefined;

//Eventos
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        añadirNumero(boton.innerText);
    })

});

botonOperador.forEach(function(boton){
    boton.addEventListener('click', function(){
        tipoOperacion(boton.innerText);

    });

});

botonResultado.addEventListener('click', function(){
    calcular();
    actualizarValor();
});

botonBorrar.addEventListener('click', function(){
    limpiar();
    actualizarValor();
});

function tipoOperacion(op){
    if (operacionActual===''){
        return;
    } else{
        calcular();
    }
    operacion= op.toString();
    operacionAnterior= operacionActual;
    operacionActual='';
}

function calcular(){
    let calculo;
    const a= parseFloat(operacionAnterior);
    const b=parseFloat(operacionActual);
    if (isNaN(a) || isNaN(b)) return; //Si son numericos los dos
    
    switch(operacion){
        case '+':
            calculo= a + b;
            break;
        case '-':
            calculo= a - b;
            break;
        case 'x':
            calculo= a * b;
            break;
        case '÷':
            calculo= a / b;
            break;
        case '%':
            calculo= a % b;
            break;
        default:
            console.log('Error');
            return;

    }
    operacionActual= calculo;
    operacion= '';
    operacionAnterior= '';
}
function añadirNumero(num){ //Creamos una variable num 
    if(num=== '.' && operacionActual.includes('.')) return;
    operacionActual= operacionActual.toString() + num.toString(); //Lo pasamos a texto
    actualizarValor();
}

function limpiar(){
    operacionActual= '';
    operacionAnterior= '';
    operacion= undefined;
}

function actualizarValor(){
    pantalla.value= operacionActual;

}

limpiar();