//Preparando formularios para permitir la carga de archivos

<html>
  <head>
    <title>Carga de imágenes</title>
  </head>
  <body>
    <form action="upload" method="POST" enctype="multipart/form-data">

    </form>
  </body>
</html>


// Usando Multer para la carga de archivos

const express = require('express');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({storage: storage })

router.post('/register', upload.any() , usersController.save);

// ¡Ahora vamos a validar nuestra foto de perfil!

var upload = multer({ storage: storage })

app.post('/register', upload.single('avatar'), (req, res, next) => {
    const file = req.file

    if(!file){
        const error = new Error('Por favor seleccione un archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})