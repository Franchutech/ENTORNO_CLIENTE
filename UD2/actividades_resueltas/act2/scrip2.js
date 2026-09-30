document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.createElement('form');
    input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Introduce tu nombre';
    input.classList.add('miinput');
    formulario.appendChild(input);

    document.body.appendChild(formulario);
});