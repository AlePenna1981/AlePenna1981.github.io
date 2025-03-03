const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const tel = document.getElementById('telefono');
const resultado = document.getElementById('resultado');

const validar = () => {
    resultado.innerHTML = '';
    let errores = [];
    let resultados = [];

    if (nombre.value === '' || nombre.value.length > 10) {
        errores.push('El nombre debe tener entre 1 y 10 caracteres');
    }

    const regexEmail = /^[^@]+@[^@]+\.com$/;
    if (!regexEmail.test(email.value)) {
        errores.push('El Email debe contener "@" y finalizar con ".com"');
    }

    const regexTel = /^[1-9][0-9]{9}$/;
    if (!regexTel.test(tel.value)) {
        errores.push('El teléfono debe tener 10 caracteres y no empezar con 0');
    }

    if (errores.length > 0) {
        let errorsDiv = document.createElement('div');
        errorsDiv.innerHTML = errores.join('<br>');
        errorsDiv.style.color = 'red';
        resultado.appendChild(errorsDiv);
        return false;
    }

    resultados.push(`Nombre: ${nombre.value}`);
    resultados.push(`Email: ${email.value}`);
    resultados.push(`Teléfono: ${tel.value}`);

    let resultadosDiv = document.createElement('div');
    resultadosDiv.innerHTML = resultados.join('<br>');
    resultado.appendChild(resultadosDiv);

    let exitoMensaje = document.createElement('h2');
    exitoMensaje.textContent = 'El formulario se envió con éxito';
    resultado.appendChild(exitoMensaje);

    return false;
};
