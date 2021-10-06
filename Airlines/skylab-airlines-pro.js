/* ENUNCIADO

Skylab Airlines PRO
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER (debe aceptar mayúscuzlas y minúsculas indiferentemente), dependiendo de la elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:
● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
● Poder eliminar vuelos mediante el ID.

Si eres USER la función debería permitir:
● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."

*/

//Vuelos
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


aerolinea();

function aerolinea(){
    bienvenida();
    mostrarVuelos();
    adminUser();
}


function bienvenida(){
    let usuario= prompt('Hola! Porfavor indicanos tu nombre.');
    if(usuario===undefined){
        window.alert('Bienvenido a Skylab Airlines');
    } else {
        window.alert(`Bienvenido a Skylab Airlines ${usuario}! A continuación verás toda la información de nuestros vuelos.`);
    }

}

function mostrarVuelos(){
console.log('Estos son los vuelos actuales:');
for(let i=0; i<flights.length;i++){
    if(flights[i]['scale']===true){
    console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
    } else {
    console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`);
    }
}
}

//Si es ADMIN o USER
function adminUser(){
    let nombreUsuario = prompt('Porfavor especifica si eres Administrador o Usuario', 'Por ej: administrador / usuario');
    if((nombreUsuario === 'administrador')||(nombreUsuario === 'Administrador')||(nombreUsuario === 'ADMINISTRADOR')){ 
       crearEliminar();
    } else if ((nombreUsuario === 'usuario')||(nombreUsuario === 'Usuario')||(nombreUsuario === 'USUARIO')){ 
        buscarPrecio();
    } else if (nombreUsuario===null||nombreUsuario===''){ 
        window.alert('Porfavor introduce una opción válida');
        adminUser();
    } else{
        alert('¡Hasta luego!');
    }

}


//ADMIN

function crearEliminar(){ // Si quiere añadir o eliminar vuelos
    let crearElimVuel;
    crearElimVuel = prompt('¿Desea crear o eliminar algun vuelo?');
    if ((crearElimVuel === 'Crear') || (crearElimVuel==='CREAR')||(crearElimVuel=='crear')){
      crearVuelos();
    } else if ((crearElimVuel==='Eliminar')||(crearElimVuel==='ELIMINAR')|| (crearElimVuel==='eliminar')){
      eliminar();
    } else if (crearElimVuel===null || crearElimVuel===''){
      window.alert('Porfavor introduce una opción válida');
      crearEliminar();
    }else {
      window.alert('¡Hasta la próxima!');
    }
}

preguntarCrearVuelos();

function preguntarCrearVuelos(){
    let CrearVuelo = window.confirm('¿Desea añadir algun vuelo?');
    if (CrearVuelo===true){
        crearVuelos();
    } else if(CrearVuelo===false) {
        window.alert('Hasta la próxima!');
    }
}

function crearVuelos(){
    if (flights.length > 15){
        window.alert('Lo sentimos, solo se permite introducir un máximo de 15 vuelos, puede eliminar alguno para poder continuar.');
        eliminar();
        return;
    } else {
        let to = window.prompt('Introduzca el destino:');
        if (to === null || to=== ''){
            window.alert('No válido');
            return;
        }
        let from = window.prompt('Introduzca el origen:');
        if (from === null|| to=== ''){
            window.alert('No válido');
            return;  
        }
        let cost = parseInt(window.prompt('Introduzca el precio:'));
        if (cost===''|| isNaN(cost)){
            window.alert('No válido');
            return;
        }
        let scale = window.prompt('¿El vuelo realiza escala? Escribe Sí/ No');
        if (scale === 'sí'|| scale=== 'SÍ' || scale ==='si'|| scale==='SI'){
            scale = true;
        } else if (scale === 'no'|| scale=== 'NO'){
            scale=false;
        } else if (scale === null){
            window.alert('No válido');
        }

       let nuevoVuelo = {
           id: flights.length,
           to,
           from,
           cost,
           scale
       }
        flights.push(nuevoVuelo);
        mostrarVuelos();

        let masVuelos= window.prompt('¿Desea añadir otro vuelo? Escribe Sí/ No');
        if(flights.length<15 && (masVuelos=== 'sí'|| masVuelos=== 'SÍ' || masVuelos ==='si'|| masVuelos==='SI')){
            crearVuelos();
        } else if(flights.length=15 && (masVuelos=== 'sí'|| masVuelos=== 'SÍ' || masVuelos ==='si'|| masVuelos==='SI')){
            window.alert ('No se pueden añadir más vuelos.')
        } else if(masVuelos=== 'no'|| masVuelos=== 'NO'){
            window.alert ('Hasta la próxima!');
        }

    }
}

function eliminar(){
    let eliminarVuelo= window.confirm('¿Desea eliminar algun vuelo?');
    if(eliminarVuelo===false){
        window.alert('Hasta la próxima!');
        return;
    } else {
        let vueloId= parseInt(window.prompt('Introduzca el ID del vuelo que desea eliminar','Por ejemplo: 07'));
        if (vueloId===null|| vueloId=== ''||isNaN(vueloId)){
            window.alert('ID no válido');
        } else{
            for(i=0; i<flights.length; i++){
                let index= flights.indexOf(flights[i]);
                flights.splice(index, 1);
                alert('Vuelo eliminado!');
                console.log(`La actual lista de vuelos es:\n El vuelo ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${flights[i].scale===true}? 'realiza escala': 'no realiza ninguna escala'.`);
            }
        }
    }
}


// USER

function buscarPrecio(){
//más alto, más bajo o igual
    let ordenar = (window.prompt('Indica como deseas ver el orden de precios: \nMás alto, introduce: alto \nMás bajo, introduce: bajo \nIgual, introduce: igual')).toLowerCase;
    let precioEscogido = parseInt(prompt('Introduzca el precio que desea buscar:')); 
    if(ordenar==='más alto'|| ordenar==='más alto'){
        for(let i=0; i<flights.length; i++){
            if(flights[i]['cost']<precioEscogido){
                if(flights[i]['scale']===true){
                    console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
                } else {
                    console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`);
                }
            }
        }
    mostrarVuelos();

    } else if (ordenar==='mas bajo'||ordenar==='más bajo'){
    for(let i=0; i<flights.length; i++){
        if(flights[i]['cost']>precioEscogido){
            if(flights[i]['scale']===true){
                console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
            } else {
                console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`);
            }
        }
    }
    mostrarVuelos();

    } else if (ordenar==='igual'){
      for(let i=0; i<flights.length; i++){
        if(flights[i]['cost']===precioEscogido){
            if(flights[i]['scale']===true){
                console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
            } else {
                console.log(`El vuelo con ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`);
            }
        }
    }
     mostrarVuelos();
    
    } else if(ordenar=== null||ordenar===''){
      window.alert('Porfavor introduce una opción válida');
    }
    if (window.confirm('¿Desea comprar algun vuelo?')){
        comprarVuelo();
    } else {
        window.alert('¡Hasta luego!');
        return;
    }
}


function comprarVuelo(){
    let indice= parseInt(prompt('Para comprar el vuelo introduzca el ID, en caso contrario pulse Cancelar'));
    if (indice===null||isNaN(indice)||indice===''){
        window.alert('Porfavor introduce un ID válido.');
        comprarVuelo();
    } else if(indice>=flights.length){
        window.alert('ID erróneo');
        comprarVuelo();
    } else {
        window.alert('Gracias por su compra, vuelva pronto.');
    }
}