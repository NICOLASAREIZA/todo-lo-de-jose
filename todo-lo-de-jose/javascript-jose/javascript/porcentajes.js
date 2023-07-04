function calcular() {
    const cantidad = document.getElementById('cantidad').value;
    const valor = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');

    if (cantidad && valor) {
        const porcentaje = ((valor / cantidad) * 1).toFixed(2);
        resultado.value = porcentaje;
    } else if (cantidad && resultado.value) {
        const porcentaje = ((resultado.value / 1) * cantidad).toFixed(2);
        valor.value = porcentaje;
    } else if (valor && resultado.value) {
        const porcentaje = ((resultado.value / valor) * 1).toFixed(2);
        cantidad.value = porcentaje;
    } else {
        alert('Por favor ingrese dos valores y el resultado');
    }
}

function calcularPorcentaje() {
    const cantidad = document.getElementById('cantidad').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const resultado = document.getElementById('resultado').value;

    if (cantidad && porcentaje) {
        const valor = ((cantidad * porcentaje) / 100).toFixed(2);
        resultado.value = valor;
    }
}
