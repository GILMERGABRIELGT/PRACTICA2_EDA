function mostrarCampos() {
    const CalculoSeleccionado = document.getElementById('Calculo').value;
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = ''; 

    if (CalculoSeleccionado === 'factorial') {
        inputFields.innerHTML = `
            <label for="numero">Número:</label>
            <input type="number" id="numero" min="0" class="form-control">
        `;
    } else if (CalculoSeleccionado === 'fibonacci') {
        inputFields.innerHTML = `
            <label for="numero">Términos:</label>
            <input type="number" id="numero" min="1" class="form-control">
        `;
    } else if (CalculoSeleccionado === 'MCD') {
        inputFields.innerHTML = `
            <label for="numero1">Número 1:</label>
            <input type="number" id="numero1" min="1" class="form-control">
            <label for="numero2">Número 2:</label>
            <input type="number" id="numero2" min="1" class="form-control">
        `;
    }
}

function calcular() {
    const CalculoSeleccionado = document.getElementById('Calculo').value;
    let resultado = '';

    if (CalculoSeleccionado === 'factorial') {
        const numero = parseInt(document.getElementById('numero').value);
        if (numero >= 0) {
            resultado = `Factorial de ${numero} es: ${factorial(numero)}`;
        } else {
            resultado = 'Por favor, introduce un número mayor o igual a cero.';
        }
    } else if (CalculoSeleccionado === 'fibonacci') {
        const numero = parseInt(document.getElementById('numero').value);
        if (numero > 0) {
            resultado = `Los primeros ${numero} términos de la serie de Fibonacci son: ${fibonacciSerie(numero).join(', ')}`;
        } else {
            resultado = 'Por favor, introduce un número mayor a cero.';
        }
    } else if (CalculoSeleccionado === 'MCD') {
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);
        if (numero1 > 0 && numero2 > 0) {
            resultado = `El MCD de ${numero1} y ${numero2} es: ${mcd(numero1, numero2)}`;
        } else {
            resultado = 'Por favor, introduce números enteros mayores a cero.';
        }
    }

    document.getElementById('resultado').innerText = resultado;
}
















    
