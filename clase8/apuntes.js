function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
        
        return 'Felicitaciones, el asiento número ' + asientoSolicitado + ' está disponible';
    } else {
        return 'Lo sentimos, el asiento número '+asientoSolicitado+' está ocupado, pero aún quedan ' + asientos.length + ' asientos disponibles';
    }
}

// console.log(asientosDisponibles([3, 15, 18, 25], 25));
// console.log(asientosDisponibles([3, 15, 18, 25], 78));
// console.log(asientosDisponibles([3, 15, 18, 25, 35], 78));
// console.log(asientosDisponibles([3, 15, 18, 25], 18));


// function reporteDePasajeros(estaciones) {
//     let reporte = [];
//     let pasajeros = 200;

//     for(let i = 0; i <= estaciones; i++) {
//         if (i === 5) {
//             pasajeros = pasajeros - 80 + 120;
//         } else if (i > 0) {
//             pasajeros = pasajeros - 30 + 50;
//         }
//         reporte.push('En la estación ' + i +' hay '+pasajeros+ ' pasajeros arriba del tren');
//     }

//     return reporte;
// }
// reporteDePasajeros(0)
// reporteDePasajeros(3)
// // ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del tren", "En la estación 2 hay 240 pasajeros arriba del tren", "En la estación 3 hay 260 pasajeros arriba del tren"]

// reporteDePasajeros(5)
// ["En la estación 0 hay 200 pasajeros arriba del tren", "En la estación 1 hay 220 pasajeros arriba del tren", "En la estación 2 hay 240 pasajeros arriba del tren", "En la estación 3 hay 260 pasajeros arriba del tren", "En la estación 4 hay 280 pasajeros arriba del tren", "En la estación 5 hay 320 pasajeros arriba del tren"]

function laClaveSecreta(array) {
    // Revertimos el array y lo convertimos a cadena
    let mensaje = array.reverse();
    // console.log(mensaje);
    // Eliminamos los caracteres "*" y devolvemos el resultado
    for(let i=0 ; i < mensaje.length ; i++) {
        if(mensaje[i] === '*'){
            mensaje[i] = mensaje[i].replace('*', '');
        }
    }
    mensaje = mensaje.join('');
    return mensaje
}
let lunes = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]

let clave = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]
laClaveSecreta(lunes)
// "El día es lunes"
laClaveSecreta(clave)