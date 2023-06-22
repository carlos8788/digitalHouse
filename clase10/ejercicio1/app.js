const bicicletas = require('./datosBici.js');  

let dhBici = {
    bicicletas,

    buscarBici: function(id) {
        let bici = this.bicicletas.filter(bici => bici.id === id);
        return bici.length > 0 ? bici[0] : null;
    },

    venderBici: function(id) {
        let bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = true;
            return bici;
        } else {
            return "Bicicleta no encontrada";
        }
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => !bici.vendida);
    },

    totalDeVentas: function() {
        let bicisVendidas = this.bicicletas.filter(bici => bici.vendida);
        return bicisVendidas.reduce((total, bici) => total + bici.precio, 0);
    }
}


console.log(dhBici.buscarBici(1));  
console.log(dhBici.venderBici(2)); 
console.log(dhBici); 
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());  
