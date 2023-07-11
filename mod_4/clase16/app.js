const express = require('express');
const path = require('path');

app = express();



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about-us.html'))
});

app.listen(3000, () => console.log('Listening on port 3000'));