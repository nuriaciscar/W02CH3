/* ENUNCIADO
 
 Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:

● Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).

● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

● A continuación, el usuario verá el coste medio de los vuelos.

● También podrá ver cuántos vuelos efectúan escalas.

● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/

//Vuelos
let flights = [
    { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

    { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

    { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

    { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

    { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

    { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

    { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

    { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

    { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

    { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

    { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

aerolinea();
lista();
precio();
escala();
ultimos();

//La total
function aerolinea() {
    let intro = window.prompt("Porfavor introduzca su nombre de usuario");
    if (intro === null) {
        console.log("Introduzca un nombre de usuario válido");
    } else {
        console.log("Le damos la bienvenida");
    }

    console.log("Estos son los vuelos disponibles para hoy:\n");
}

//Visualizar vuelo y dependiendo de la escala
function lista() {
    for (let i = 0; i < flights.length; i++) {
        //Recorre todos los vuelso
        if (flights[i]["scale"] === true) {
            console.log(
                `El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza escala.`
            );
        } else {
            console.log(
                `El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`
            );
        }
    }
}

//Coste medio de los vuelos
function precio() {
    let precioMedio = 0;
    for (let i = 0; i < flights.length; i++) {
        precioMedio = flights[i]["cost"];
    }
    let medioTotal = (precioMedio / flights.length).toFixed(2);
    console.log("El precio medio de los vuelos es " + precioMedio + " euros");
}

//Cuántos efectúan escala
function escala() {
    let vuelosEscala = 0;
    for (let i = 0; i < flights.length; i++) {
        if (flights[i]["scale"] === true) {
            vuelosEscala = vuelosEscala + 1;
        }
    }
    console.log(`Un total de ${vuelosEscala} vuelos efectúan escalas.`);
}

function ultimos() {
    let ultimosDestinos = [];
    for (let i = 0; i < flights.length; i++) {
        if (flights.indexOf(flights[i]) >= 6) {
            ultimosDestinos.push(flights[i].to);
        }
    }
    console.log(`Los últimos destinos del dia son: ${ultimosDestinos}`);
}
