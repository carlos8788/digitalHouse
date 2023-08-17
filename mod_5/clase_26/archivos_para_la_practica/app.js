const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routerMain = require('./src/routes/main.router')

app.use(express.static('public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
console.log(path.join(__dirname, 'views'));

app.use('/', routerMain)



app.listen(PORT, () => console.log(`listening on ${PORT}`));