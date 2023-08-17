const Data = require('../services/main.service')

let data = new Data('./src/models/data.json');
const arrayData = data.readFileJSON()

const mainController = {
    index: (req, res) => {


        return res.render('index', { 'products': arrayData })
    },

    menuDetail: (req, res) => {
        const { id } = req.params
        const menu = arrayData.find(m => m.id === id)
        if (menu) {
            return res.render('detalleMenu', { 'menu': menu });
        } else {
            return res.render('detalleMenu', { 'menu': null, 'menuNotFound': 'Menu not found' });
        }
    }
}

module.exports = mainController