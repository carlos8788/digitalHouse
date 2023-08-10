// Primer controller

let carritoController = {

    sacarItem: function () { },
    consultarItem: function () { },
    agregarItem: function (req, res) {
        return res.send('Item Agregado')
    }

};

module.exports = carritoController

// Ruteando controladores

let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item', carritoController.agregarItem)

module.exports = router

// Buscando series

const express = require('express');
const app = express();

app.get('/series', (req, res) => {
  res.send(series);
});


// Buscar una serie

const express = require('express');
const app = express();

app.get('/serie/:id', (req, res) => {
  const id = Number(req.params.id); 
  const serie = series.find(s => s.id === id); 

  (serie)?res.send(serie):res.send('Serie not found');
});


// Modularizar rutas

const express = require('express')
const router = express.Router()


// Exportar rutas 

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});

module.exports = router

// Usando rutas

