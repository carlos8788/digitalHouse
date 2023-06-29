const { importar } = require('./collectibles.js');

const hotToys = importar('Bandai');
const bandai = importar('Star Wars');
const starWars = importar('Hot Toys');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

const collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function () {
        this.figuras.forEach((figura) => {
            console.log(figura);
        });
    },

    figuresByBrand: function (marca) {
        return this.figuras.filter((figura) => figura.marca === marca);
    }
};

collectibles.listFigures();
// console.log(collectibles.figuresByBrand('Hot Toys'));
// console.log(collectibles.figuresByBrand('Hot Toys'));
