let operacionesBancarias = [500, -200, 300, -100, 600, -50]; // depósitos y retiros

function calcularSaldos(operaciones) {
    let saldoDepositos = 0;
    let saldoRetiros = 0;

    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i] > 0) {
            saldoDepositos += operaciones[i];
        } else {
            saldoRetiros += operaciones[i];
        }
    }

    let saldoActual = saldoDepositos + saldoRetiros;

    return {
        saldoDepositos: saldoDepositos,
        saldoRetiros: saldoRetiros,
        saldoActual: saldoActual
    };
}

function informeCliente(nombre, apellido, operaciones) {
    let saldos = calcularSaldos(operaciones);

    return {
        nombre: nombre,
        apellido: apellido,
        saldoDepositos: saldos.saldoDepositos,
        saldoRetiros: saldos.saldoRetiros,
        saldoActual: saldos.saldoActual
    };
}

let informe = informeCliente('Luis', 'Perez', operacionesBancarias);
console.log(informe);

