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

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate";
    } else if ((jugador === "piedra" && computadora === "tijera") ||
               (jugador === "papel" && computadora === "piedra") ||
               (jugador === "tijera" && computadora === "papel")) {
        return "Jugador";
    } else {
        return "Computadora";
    }
}
let ganador = determinarGanador(jugador, computadora);
document.getElementById("Ganador").textContent = "El ganador es: " + ganador;
console.log("Jugador: " + jugador);
console.log("Computadora: " + computadora);
document.getElementById("resultado_ppt").textContent = "Jugador: " + jugador + ", Computadora: " + computadora;

//EJERCICIO 4  CODIGO

document.getElementById("subtitulo4").textContent = "Entrenamiento 4";

const numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.random());
    }

function calcularValores(myArray, valorMinimo){
    let contador = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] >= valorMinimo) {
            contador++;
        }
    }
    return contador;
}
const valorMinimo = parseFloat(prompt("Ingrese un valor mínimo entre 0.0 y 1.0:"));

console.log("Cantidad de números mayores o iguales a " + valorMinimo + ": " + calcularValores(numeros, valorMinimo));
document.getElementById("resultado4").textContent = "Cantidad de números mayores o iguales a " + valorMinimo + ": " + calcularValores(numeros, valorMinimo);


//EJERCICIO 5 CODIGO

document.getElementById("subtitulo5").textContent = "Entrenamiento 5";

const numeros2 = [];
for (let i = 0; i < 100; i++) {
    numeros2.push(Math.random()*10);
}


//LA SUMA DE LOS VALORES
function sumarValores(myArray2){
    let suma = 0;
    for (let i = 0; i < myArray2.length; i++) {
        suma += myArray2[i];
    }
    return suma;
}
console.log("Suma de los números: " + sumarValores(numeros2));

document.getElementById("sumaValores").textContent = "Suma de los números: " + sumarValores(numeros2);


//LA MEDIA DE LOS VALORES
function calcularMedia(myArray2){
    let suma = sumarValores(myArray2);
    let media = suma / myArray2.length;
    return media;
}
console.log("Media de los números: " + calcularMedia(numeros2));

document.getElementById("mediaValores").textContent = "Media de los números: " + calcularMedia(numeros2);


//LA MEDIANA DE LOS VALORES

function calcularMediana(myArray2){
    let sortedArray = myArray2.slice().sort((a, b) => a - b);
    let middleIndex = Math.floor(sortedArray.length / 2); 
    return sortedArray[middleIndex];
}
console.log("Mediana de los números: " + calcularMediana(numeros2));

document.getElementById("medianaValores").textContent = "Mediana de los números: " + calcularMediana(numeros2);


//EL VALOR MAXIMO DE LOS VALORES
function calcularMaximo(myArray2){
    let maximo = myArray2[0];
    for (let i = 1; i < myArray2.length; i++) {
        if (myArray2[i] > maximo) {
            maximo = myArray2[i];
        }
    }
    return maximo;
}
console.log("Máximo de los números: " + calcularMaximo(numeros2));

document.getElementById("maximoValor").textContent = "Máximo de los números: " + calcularMaximo(numeros2);


//EL VALOR MINIMO DE LOS VALORES
function calcularMinimo(myArray2){
    let minimo = myArray2[0]; 
    for (let i = 1; i < myArray2.length; i++) {
        if (myArray2[i] < minimo) {
            minimo = myArray2[i];
        }   
    }
    return minimo;
}
console.log("Mínimo de los números: " + calcularMinimo(numeros2));
document.getElementById("minimoValor").textContent = "Mínimo de los números: " + calcularMinimo(numeros2);