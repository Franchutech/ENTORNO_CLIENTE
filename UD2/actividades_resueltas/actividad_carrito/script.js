import Carrito from './carrito.js';

async function iniciarTienda() {
    const respuesta = await fetch("https://jsonblob.com/01a11694-b327-7e32-acb4-6e1e00cabff0");
    const datos = await respuesta.json();

    console.log(datos); 
}

iniciarTienda();