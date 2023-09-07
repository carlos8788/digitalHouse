const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    const logMessage = `El usuario ingresó a la ruta: ${req.url}, con el método ${req.method}\n`;

    const filePath = path.join(__dirname, '..', 'logs', 'userLogs.txt');

    fs.appendFile(filePath, logMessage, (err) => {
        if (err) {
            console.error('Error al escribir en el txt:', err);
        }
        next();
    });
};
