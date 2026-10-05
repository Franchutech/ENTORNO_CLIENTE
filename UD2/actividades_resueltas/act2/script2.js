document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.createElement('form');
    const titulo = document.createElement('h2');
    titulo.textContent = 'Formulario de Registro';
    formulario.appendChild(titulo);

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Introduce tu nombre';
    inputNombre.classList.add('miinput');
    formulario.appendChild(inputNombre);

    const inputEdad = document.createElement('input');
    inputEdad.type = 'number';
    inputEdad.placeholder = 'Introduce tu edad';
    inputEdad.classList.add('miinput');
    formulario.appendChild(inputEdad);

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Introduce tu email';
    inputEmail.classList.add('miinput');
    formulario.appendChild(inputEmail);

    const inputTelefono = document.createElement('input');
    inputTelefono.type = 'tel';
    inputTelefono.placeholder = 'Introduce tu teléfono';
    inputTelefono.classList.add('miinput');
    formulario.appendChild(inputTelefono);
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'terminos';
    formulario.appendChild(checkbox);

    const label = document.createElement('label');
    label.setAttribute('for', 'terminos');
    label.textContent = 'Acepto los términos y condiciones';
    formulario.appendChild(label);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';
    formulario.appendChild(botonEnviar);


    document.body.appendChild(formulario);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();


        if (inputNombre.value.trim() === '' || inputNombre.value.length < 3 || inputNombre.value.length > 25) {
            alert('El nombre debe tener entre 3 y 25 caracteres.');
            return;
        }
        if (inputEdad.value.trim() === '' || isNaN(inputEdad.value) || inputEdad.value < 0) {
            alert('Por favor, introduce una edad válida.');
            return;
        }
        if (inputEmail.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
            alert('Por favor, introduce un email válido.');
            return;
        }
        if (inputTelefono.value.trim() === '' || !/^\d{9}$/.test(inputTelefono.value)) {
            alert('Por favor, introduce un teléfono válido.');
            return;
        }
        if (!checkbox.checked) {
            alert('Debes aceptar los términos y condiciones para enviar el formulario.');
            return;
        }
        alert('Formulario enviado correctamente.');

    });

});