const express = require('express');

const formRouter = require('./src/routes/form.router');



const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/', formRouter);




app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
