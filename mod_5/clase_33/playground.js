// #### SESSION ####

// Configurando session
const express = require('express');
const app = express();

// Escribir tu código aquí
const session = require('express-session');

app.use(session({secret: 'frase secreta'}));

// Cambiando idioma

req.session.idioma = req.query.idioma

// Validando usuarios

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({ secret: "frase secreta" }));

const admin = (req, res) => {

	if (req.session.admin) {

		//Código del controlador
	}
	else {
		res.redirect('/login')
	}

}

// #### COOKIES ####

// Setear cookie

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	//Escribí tu código acá
    res.cookie('ultimoAcceso',  new Date())
	//Código del controlador
}

//Preferencias de usuario

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;

	//Agregá el if else acá
	if (req.cookies.estilo) {
		estilo = req.cookies.estilo;
	}
	else{
		estilo = 'default';
	}

	res.render('/', { estilo: estilo });

	//Código del controlador
}

// Recomendados

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
	const preferencias = req.cookies.preferencias;
	const productos = listadoProductos[preferencias];
	res.render('recomendados', { productos: productos });
}

// #### HASHING ####

// Probando hash

const password = '123456';
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync(password, 10);

console.log(hash);

// Validando información hasheada

// NOTAAAAAAAAAAAAAAAAAAAAAAAAA, ESTO VALIDA EL PLAYGROUND, NO SIGNIFICA QUE SEA LO CORRECTO

const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);

// Escribir tu código aquí
const hash2 = bcrypt.hashSync('123456', 10);

if(hash1 == hash2) console.log('los hash son iguales');

// Utilizando el método compareSync

const bcrypt = require('bcrypt');
const password = '123456';
const passwordEncriptada = bcrypt.hashSync(password, 10);


// Escribir tu código aquí
const checkeo = bcrypt.compareSync(password, passwordEncriptada)
if (checkeo) console.log('El password es correcto');