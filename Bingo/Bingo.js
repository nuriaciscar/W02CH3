//ranking puntuacion
let puntosFinales= {
    nombre: 'Oscar', puntos: 31,
    nombre: 'Lola', puntos: 44,
    nombre: 'Lucia', puntos: 17,
    nombre: 'Anna', puntos: 29
};

let numerosCarton= [];
let cartonBingo=[];
let numerosBombo= [];
let points= 0;
let linea1= false;
let linea2= false;
let linea3= false;


//Mostrar el ranking
function ranking(){
 console.log('Los jugadores con más puntos son:');
 puntosFinales.sort(function (a, b) {return b.points - a.points}); //Ordenamos de más a menos
 console.log(puntosFinales);
}

function puntuacion(){
    points=100-numerosBombo.length; //Por cada turno,un punto menos
}

 
function crearCarton(){
  let num= Math.floor(Math.random()*99); //Número random del 1 al 99
  if(numerosCarton.length<15) { //Hasta 15 números
    if ((numerosCarton.indexOf(num)=== -1) && num!=0){
       numerosCarton.push(num);
       crearCarton();
    } else{
        crearCarton();
    }
  } else{
     cartonBingo.push(numerosCarton.splice(0,5));
     cartonBingo.push(numerosCarton.splice(5,10));
     cartonBingo.push(numerosCarton.splice(10,15));
     console.table(cartonBingo);
  }
}

function jugarCarton(){
    crearCarton();
    console.table(cartonBingo);
    if(window.confirm('Si quieres jugar con este cartón pulsa Aceptar, si deseas cambiarlo pulsa Cancelar')){
       console.log('Empezamos!');
       conseguirBingo();
    } else{
       console.clear();
       jugarCarton();
    }
}

//Sacar números aleatorios
function bombo(){ //Hay hasta 99 bolas
if(numerosBombo.length<99){
    let numero= Math.floor(Math.random()*100);
    if ((numerosBombo.indexOf(num)=== -1) && num!=0){
        numerosBombo.push(numero);
        numero= nuevoNumero;
    } else{
        bombo();
    }
}
}

//Acertar números. Si coincide con alguno de los existentes en el cartón, cambiará por una "X".
function acertar(){
    for(let i=0; i<cartonBingo; i++){//Recorremos filas y columnas con la i y la j
        for(let j=0; j<cartonBingo; j++){
            if(nuevoNumero=== cartonBingo[i][j]){
                cartonBingo[i][j]= 'X';
            }
        }    
    }
}

//Conseguir línea, hay 3 
function primeraLinea(){
    let linea1= cartonBingo[0];
    for(j=0;j<cartonBingo[0].length;j++){
        if (cartonBingo[0][j]=== 'X'){
           window.alert('¡LÍNEA!');
           linea1=== true;
        } else {
           linea1===false;
           break;
    }
}
}

function segundaLinea(){
    let linea2= cartonBingo[1];
    for(j=0;j<cartonBingo[1].length;j++){
        if (cartonBingo[1][j]=== 'X'){
           window.alert('¡LÍNEA!');
           linea2=== true;
        } else {
           linea2===false;
           break;
    }

}
}

function terceraLinea(){
    let linea3= cartonBingo[2];
    for(j=0;j<cartonBingo[2].length;j++){
        if (cartonBingo[2][j]=== 'X'){
           window.alert('¡LÍNEA!');
           linea3=== true;
        } else {
           linea3===false;
           break;
    }
}
}

//Aquí es donde se desarrolla el juego
function juego(){
    let usuario= prompt('Hola! Porfavor introduce tu nombre. \nTienes 100 puntos pero se restará un punto por cada turno. Suerte!'); 
    if(usuario===''||usuario===null){
        window.alert(`Hasta luego!`);
    }else {
        window.alert(`Bienvenido/a ${usuario}!`);
        function jugarCarton(){
            crearCarton();
            console.table(cartonBingo);
            if(window.confirm('Si quieres jugar con este cartón pulsa Aceptar, si deseas cambiarlo pulsa Cancelar')){
               console.log('Empezamos!');
               conseguirBingo();
            } else{
               console.clear();
               jugarCarton();
            }
        function conseguirBingo(){
          acertar();
          primeraLinea();
          segundaLinea();
          terceraLinea();

         if(linea1===true&&linea2===true&&linea3===true){
            window.alert('Bingo!!! Felicidades');
            puntuacion();
            ranking();
            puntosFinales.push({nombre: usuario, puntos:points});
            puntosFinales.sort((a, b) => b.puntos - a.puntos);
            console.log(puntosFinales);
            
            let volverJugar= window.confirm('¿Quieres volver a jugar?');
              if(volverJugar === false){
                 console.log('¡Hasta pronto!');
              }else{
                 numerosCarton= [];
                 cartonBingo= [];
                 numerosBombo= [];
                 points= 0;
                 linea1=false;
                 linea2=false;
                 linea3=false;
                 juego();

              }
         } else{
            let continuar= window.confirm('¿Desea sacar otro número?');//continuar jugando
            if(continuar===true){
                bombo();
                acertar();
                console.table(cartonBingo);
                console.log(`Ha salido el número ${numerosBombo}`);
                conseguirBingo();
            } else{
                console.log('¡Hasta pronto!');
            }

         }
        
        
        }
      conseguirBingo(); 
    }
    jugarCarton(); 
  }  
    
}
  
juego();













