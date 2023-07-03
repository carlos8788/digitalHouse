const fs = require('fs');

const importar = (marca) => {
    let figuras = [];
    for(let i = 1; i <= 3; i++) {
        let data = fs.readFileSync(`./datos/figuras${i}.json`, 'utf-8');
        let figurasArchivo = JSON.parse(data);
        figuras = figuras.concat(figurasArchivo.filter(figura => figura.marca === marca));
    }
    return figuras;
}



module.exports = { importar };
