document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.createElement('p');
    parrafo.textContent = '¡En este proyecto estoy aprendiendo JS sin copiar IA jaja!';
    parrafo.classList.add('miparrafo');
    document.body.appendChild(parrafo);

    const boton = document.createElement('button');
    boton.textContent = 'Probando colores en el botón XD';
    boton.classList.add('miboton');
    document.body.appendChild(boton);

    boton.addEventListener('click', () => {
        alert('Has hecho clic');
    });

});
