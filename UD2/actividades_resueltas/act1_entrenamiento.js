document.getElementById("titulo").textContent = "PRIMER PRÁCTICA JS";



//EJERCICIO 1 CODIGO
document.getElementById("subtitulo1").textContent = "Entrenamiento 1";


let calificacion;
do {
    calificacion = parseInt(prompt("Ingrese su calificación (0-10):"));
   
}while(isNaN(calificacion) || calificacion < 0 || calificacion > 10);

if (calificacion >=0 && calificacion < 3) {
    document.getElementById("resultado").textContent = "Muy Deficiente " + calificacion + ".";
}else if (calificacion >= 3 && calificacion < 5) {
    document.getElementById("resultado").textContent = "Insuficiente " + calificacion + ".";
}else if (calificacion >= 5 && calificacion < 6) {
    document.getElementById("resultado").textContent = "Bien " + calificacion + ".";
}else if (calificacion >= 6 && calificacion < 9) {
    document.getElementById("resultado").textContent = "Notable " + calificacion + ".";
}else {
    document.getElementById("resultado").textContent = "Sobresaliente " + calificacion + ".";
};

console.log(document.getElementById("resultado").textContent);


//EJERCICIO 2 CODIGO
document.getElementById("subtitulo2").textContent = "Entrenamiento 2";

let horas= 23;
let minutos= 59;
let segundos= 59;

segundos=segundos + 1;

if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
        minutos = 0;
        horas++;
        if (horas === 24) {
            horas = 0;
        }
    }
}

if (horas < 10) {
    horas = "0" + horas;
}
if (minutos < 10) {
    minutos = "0" + minutos;
}
if (segundos < 10) {
    segundos = "0" + segundos;
}


console.log("La hora actualizada es: " + horas + ":" + minutos + ":" + segundos);


//EJERCICIO 3 CODIGO

document.getElementById("subtitulo3").textContent = "Entrenamiento 3";
document.getElementById("instrucciones").textContent = "INSTRUCCIONES => Elige una opción: Piedra, Papel o Tijera.La piedra vence a la tijera rompiéndola; la tijera vence al papel cortándolo; y el papel vence a la piedra envolviéndola. Si ambos eligen la misma opción, se produce un empate.";

const opciones = ["piedra", "papel", "tijera"];

let jugador = pedirjugada("Jugador");
let computadora = obtenerJugadaComputadora();

function pedirjugada (nombreJugador) {
    let jugada;
    jugada = prompt(nombreJugador + ", ingrese su jugada (piedra, papel o tijera):").toLowerCase();
    while (!opciones.includes(jugada)) {
        jugada = prompt(nombreJugador + ", ingrese una jugada válida (piedra, papel o tijera):").toLowerCase();
    }
    return jugada;
}

function obtenerJugadaComputadora() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}
