// Agregando el middleware express.json()

const express = require('express');
const app = express();

const middlewareJSON =express.json()

//Agrear el middleware aquí

app.use(middlewareJSON)

const router = express.Router();
router.post('/crear-usuario', (req, res) => {
	console.log(req.body);

	res.send('El usuario se creó con éxito');
});

app.use(router);

app.listen(3000);

//Sitio en mantenimiento

const express = require('express');
const app = express();
let enMantenimiento = false;

//Agrear el middleware aquí

app.use((req, res, next) => {
    enMantenimiento ? res.render("en-mantenimiento") : next();
    
})

// Agregando la propiedad usuario

const express = _require('express');
const app = express();
const usuario = {
    nombre: 'Máximo',
    apellido: 'Cozzetti'
};

app.use((req, res, next) => {
    req.usuario = usuario
    next();
})

// Agregando middleware en la ruta "subir-archivo"

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/subir-archivo', upload.any(),fileController.upload); //Agregar el middleware de multer

// Redirigiendo a la HOME

const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

//Creá tu función redirigir
const redirigir = (req, res, next) => {
    res.redirect('/')
}

router.get('/ruta-en-desuso', redirigir, OldController.index); //Agregá la función redirigir como segundo parámetro de tu ruta

// Validaciones

const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');

const lista = [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
]

router.post('/registro', [...lista],  UsuarioController.registro);

// Express Validator avanzado

const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);

    //Chequear los errores acá, redirigir si hay errores
    if (!errores.isEmpty()){
      return res.render('login', {error: errores.array()})
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}
