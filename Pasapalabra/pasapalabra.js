/* eslint-disable no-console */
/* eslint-disable no-alert */
// Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo: '>>>'With the letter "M", Capital of Spain, located in the center of the country. '>>>' "Madrid" '>>>'Correct, you have 1 Point!

const questiones = [
    // Tenemos 27 letras en total

    [
        {
            letter: "a",
            answer: "abducir",
            status: 0,
            question:
                "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
        },
        {
            letter: "a",
            answer: "anticuario",
            status: 0,
            question: "CON LA A. Persona que colecciona antiguedades",
        },
        {
            letter: "a",
            answer: "arteria",
            status: 0,
            question:
                "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo",
        },
    ],

    [
        {
            letter: "b",
            answer: "bingo",
            status: 0,
            question:
                "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
        },
        {
            letter: "b",
            answer: "bitacora",
            status: 0,
            question:
                "CON LA B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
        },
        {
            letter: "b",
            answer: "biberón",
            status: 0,
            question:
                "CON LA B. Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma",
        },
    ],

    [
        {
            letter: "c",
            answer: "churumbel",
            status: 0,
            question: "CON LA C. Niño, crío, bebé",
        },
        {
            letter: "c",
            answer: "capo",
            status: 0,
            question:
                "CON LA C. Jefe de una mafia, especialmente de narcotraficantes",
        },
        {
            letter: "c",
            answer: "cicerone",
            status: 0,
            question:
                "CON LA C. 	Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes",
        },
    ],

    [
        {
            letter: "d",
            answer: "diarrea",
            status: 0,
            question:
                "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
        },
        {
            letter: "d",
            answer: "diplomacia",
            status: 0,
            question:
                "CON LA D. Actividad que realiza un país para mantener buenas relaciones con el resto de países",
        },
        {
            letter: "d",
            answer: "desodorante",
            status: 0,
            question:
                "CON LA D. Producto que se utiliza para suprimir el olor corporal o de algún recinto",
        },
    ],

    [
        {
            letter: "e",
            answer: "ectoplasma",
            status: 0,
            question:
                "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
        },
        {
            letter: "e",
            answer: "equinoccio",
            status: 0,
            question:
                "CON LA E. Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra",
        },
        {
            letter: "e",
            answer: "efimero",
            status: 0,
            question: "CON LA E. Pasajero, de corta duración",
        },
    ],

    [
        {
            letter: "f",
            answer: "facil",
            status: 0,
            question:
                "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
        },
        {
            letter: "f",
            answer: "faja",
            status: 0,
            question:
                "CON LA F. Prenda interior elástica que ciñe la cintura, o la cintura y las caderas",
        },
        {
            letter: "f",
            answer: "fisiologia",
            status: 0,
            question:
                "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos",
        },
    ],

    [
        {
            letter: "g",
            answer: "galaxia",
            status: 0,
            question:
                "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
        },
        {
            letter: "g",
            answer: "gominola",
            status: 0,
            question:
                "CON LA G. Golosina blanda masticable, generalmente recubierta de azúcar",
        },
        {
            letter: "g",
            answer: "glaciacion",
            status: 0,
            question:
                "CON LA G. Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo",
        },
    ],

    [
        {
            letter: "h",
            answer: "harakiri",
            status: 0,
            question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
        },
        {
            letter: "h",
            answer: "hinojo",
            status: 0,
            question:
                "CON LA H. Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina",
        },
        {
            letter: "h",
            answer: "historia",
            status: 0,
            question:
                "CON LA H. Capacidad para inventar cosas o para pensar y hablar con gracia",
        },
    ],

    [
        {
            letter: "i",
            answer: "iglesia",
            status: 0,
            question: "CON LA I. Templo cristiano",
        },
        {
            letter: "i",
            answer: "ingenio",
            status: 0,
            question:
                "CON LA I. Capacidad para inventar cosas o para pensar y hablar con gracia",
        },
        {
            letter: "i",
            answer: "Ilves",
            status: 0,
            question:
                "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",
        },
    ],

    [
        {
            letter: "j",
            answer: "jabali",
            status: 0,
            question:
                "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        },
        {
            letter: "j",
            answer: "judion",
            status: 0,
            question:
                "CON LA J. Variedad de judía de vainas anchas y semilla grande",
        },
        {
            letter: "j",
            answer: "jade",
            status: 0,
            question:
                "CON LA J. Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno",
        },
    ],

    [
        {
            letter: "k",
            answer: "kamikaze",
            status: 0,
            question:
                "CON LA K. Persona que se juega la vida realizando una acción temeraria",
        },
        {
            letter: "k",
            answer: "frank",
            status: 0,
            question:
                "CONTEIENE LA K. Apellido de una niña que ha pasado a la historia por su diario",
        },
        {
            letter: "k",
            answer: "frankenstein",
            status: 0,
            question:
                "CONTIENE LA K. Título de una novela y nombre de su protagonista, un sabio que da vida a un monstruo componiendo miembros de cadáveres",
        },
    ],

    [
        {
            letter: "l",
            answer: "licantropo",
            status: 0,
            question: "CON LA L. Hombre lobo",
        },
        {
            letter: "l",
            answer: "linaje",
            status: 0,
            question:
                "CON LA L. Ascendencia o descendencia de una familia, especialmente noble",
        },
        {
            letter: "l",
            answer: "lema",
            status: 0,
            question:
                "CON LA L. Frase que expresa la forma en que debe actuar una persona",
        },
    ],

    [
        {
            letter: "m",
            answer: "miriñaque",
            status: 0,
            question:
                "CON LA M. Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo",
        },
        {
            letter: "m",
            answer: "misantropo",
            status: 0,
            question:
                "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        },
        {
            letter: "m",
            answer: "madriguera",
            status: 0,
            question:
                "CON LA M. Cueva en que habitan ciertos animales, especialmente los conejos",
        },
    ],

    [
        {
            letter: "n",
            answer: "necedad",
            status: 0,
            question: "CON LA N. Demostración de poca inteligencia",
        },
        {
            letter: "n",
            answer: "nabato",
            status: 0,
            question: "CON LA N. Espinazo de los vertebrados",
        },
        {
            letter: "n",
            answer: "ninfa",
            status: 0,
            question:
                "CON LA N. En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos",
        },
    ],

    [
        {
            letter: "ñ",
            answer: "señal",
            status: 0,
            question:
                "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
        },
        {
            letter: "ñ",
            answer: "acuñar",
            status: 0,
            question: "CONTIENE LA Ñ. Hacer o fabricar moneda",
        },
        {
            letter: "ñ",
            answer: "ñandu",
            status: 0,
            question:
                "CONTIENE LA Ñ. Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie",
        },
    ],

    [
        {
            letter: "o",
            answer: "orco",
            status: 0,
            question:
                "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
        },
        {
            letter: "o",
            answer: "onomatopeya",
            status: 0,
            question:
                "CON LA O. Palabra que imita el sonido que hace un animal o una cosa",
        },
        {
            letter: "o",
            answer: "onirico",
            status: 0,
            question: "CON LA O. Perteneciente o relativo a los sueños",
        },
    ],

    [
        {
            letter: "p",
            answer: "protoss",
            status: 0,
            question:
                "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
        },
        {
            letter: "p",
            answer: "pabellon",
            status: 0,
            question:
                "CON LA P. Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él",
        },
        {
            letter: "p",
            answer: "piolet",
            status: 0,
            question:
                "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",
        },
    ],

    [
        {
            letter: "q",
            answer: "queso",
            status: 0,
            question:
                "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
        },
        {
            letter: "q",
            answer: "equilatero",
            status: 0,
            question:
                "CON LA Q. Se dice del triángulo que tiene todos sus lados iguales",
        },
        {
            letter: "q",
            answer: "quimera",
            status: 0,
            question:
                "CON LA Q. Cosa que, sin ser real, alguien la imagina como posible o verdadera",
        },
    ],

    [
        {
            letter: "r",
            answer: "raton",
            status: 0,
            question: "CON LA R. Roedor",
        },
        {
            letter: "r",
            answer: "risaralda",
            status: 0,
            question:
                "CON LA R. Departamento de Colombia con capital en la ciudad de Pereira",
        },
        {
            letter: "r",
            answer: "remora",
            status: 0,
            question:
                "CON LA R. Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes",
        },
    ],

    [
        {
            letter: "s",
            answer: "stackoverflow",
            status: 0,
            question:
                "CON LA S. Comunidad salvadora de todo desarrollador informático",
        },
        {
            letter: "s",
            answer: "stotana",
            status: 0,
            question:
                "CON LA S. Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos",
        },
        {
            letter: "s",
            answer: "sentar",
            status: 0,
            question:
                "CON LA S. Poner o colocar a alguien en una silla o banco",
        },
    ],

    [
        {
            letter: "t",
            answer: "terminator",
            status: 0,
            question:
                "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        },
        {
            letter: "t",
            answer: "tipi",
            status: 0,
            question:
                "CON LA T. Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",
        },
        {
            letter: "t",
            answer: "testamento",
            status: 0,
            question:
                "CON LA T. Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte",
        },
    ],

    [
        {
            letter: "u",
            answer: "unamuno",
            status: 0,
            question:
                "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        },
        {
            letter: "u",
            answer: "unilateral",
            status: 0,
            question:
                "CON LA U. Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",
        },
        {
            letter: "u",
            answer: "ultimo",
            status: 0,
            question: "Antónimo de Primero",
        },
    ],

    [
        {
            letter: "v",
            answer: "vikingos",
            status: 0,
            question:
                "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        },
        {
            letter: "v",
            answer: "verbo",
            status: 0,
            question: "CON LA V. Palabra que indica acción o estado",
        },
        {
            letter: "v",
            answer: "verso",
            status: 0,
            question:
                "CON LA V. Cada uno de los renglones cortos que forman una poesía",
        },
    ],

    [
        {
            letter: "w",
            answer: "sandwich",
            status: 0,
            question:
                "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
        },
        {
            letter: "w",
            answer: "whisky",
            status: 0,
            question:
                "CON LA W. Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales",
        },
        {
            letter: "w",
            answer: "whatsapp",
            status: 0,
            question: "CON LA W. Aplicaciín para enviar mensajes",
        },
    ],

    [
        {
            letter: "x",
            answer: "estra",
            status: 0,
            question: "CONTIENE LA X. Prefijo que significa “fuera de”",
        },
        {
            letter: "x",
            answer: "botox",
            status: 0,
            question:
                "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
        },
        {
            letter: "x",
            answer: "auxiliar",
            status: 0,
            question: "CONTIENE LA X. El verbo haber es un verbo…",
        },
    ],

    [
        {
            letter: "y",
            answer: "peyote",
            status: 0,
            question:
                "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
        },
        {
            letter: "y",
            answer: "ensayar",
            status: 0,
            question:
                "CONTIENE LA Y. Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",
        },
        {
            letter: "y",
            answer: "yak",
            status: 0,
            question:
                "CON LA Y. Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío",
        },
    ],

    [
        {
            letter: "z",
            answer: "zen",
            status: 0,
            question:
                "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
        },
        {
            letter: "z",
            answer: "zumbido",
            status: 0,
            question:
                "CON LA Z. Ruido que hacen algunos insectos como las abejas",
        },
        {
            letter: "z",
            answer: "zebra",
            status: 0,
            question: "CON LA Z. Animal blanco y negro",
        },
    ],
];

const rankingg = [];
let preguntaEscogida = [];
let aciertosTotales;
let fallosTotales;
let total;

function generarPreguntas() {
    // Escogemos una pregunta al azar
    preguntaEscogida = [];
    for (let i = 0; i < preguntaEscogida.length; i++) {
        const preguntas =
            questiones[i][Math.floor(Math.random() * questiones[i].length)];
    }
}

function pasapalabra() {
    aciertosTotales = 0;
    fallosTotales = 0;
    total = 0;

    while (total < 27) {
        for (let i = 0; i < preguntaEscogida.length; i++) {
            if (preguntaEscogida[i].status === 0) {
                const respuesta = prompt(
                    `${preguntaEscogida[i].preguntas}Escribe tu respuesta sin acentos. \nRecuerda que escribiendo END finaliza el guejo y para pasar palabra escribe "pasapalabra" o pulsa Aceptar o Cancelar.`
                );
                if (respuesta === null) {
                    alert(
                        `Respuesta incorrecta... La respuesta correcta es ${preguntaEscogida.answer}.`
                    );
                    preguntaEscogida[i].status = 1;
                    total += 1;
                    fallosTotales += 1;
                } else if (
                    respuesta.toLowerCase() === "pasapalabra" ||
                    respuesta.length === 0
                ) {
                    alert(
                        "Pasapalabra! \nMás adelante podrás volver a esta pregunta."
                    );
                } else if (
                    respuesta.toLowerCase() === preguntaEscogida[i].answer
                ) {
                    alert("La respuesta es correcta!!! +1 punto!");
                    preguntaEscogida[i].status = 1;
                    total += 1;
                    aciertosTotales += 1;
                } else if (respuesta.toLowerCase() === "end") {
                    alert("Juego finalizado");
                    break;
                } else {
                    alert(
                        `Respuesta incorrecta... La respuesta correcta es ${preguntaEscogida.answer}.`
                    );
                    preguntaEscogida[i].status = 1;
                    total += 1;
                    fallosTotales += 1;
                }
            }
        }
    }
}

function rankingOrdenado() {
    // Ordenamos según el número de puntos
    rankingg.sort((a, b) => b.answers - a.answers);
    for (let i = 0; i < rankingg.length; i++) {
        console.log(`${rankingg[i].jugador}: ${rankingg[i].puntos}`);
    }
}

function bienvenida() {
    // Pedimos nombre de usuario
    const usuario = prompt("Porfavor introduce tu nombre de jugador");
    if (usuario === null || usuario === "") {
        alert("Porfavor introduce un nombre válido");
        bienvenida();
    } else {
        window.alert(
            `Hola! Bienvenido/a ${usuario} a Pasapalabra! \nGanarás 1 punto por cada palabra acertada de cada definición. Para salir del juego en cualquier momento escribe "END". \n¿Estás preparado/a? `
        );
        juego();
    }
}

bienvenida();
