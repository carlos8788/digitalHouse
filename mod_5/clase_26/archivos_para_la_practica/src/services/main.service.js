const fs = require('fs')

class Data {
    constructor(path){
        this.path = path;
    }

    readFileJSON = () => {
        return JSON.parse(fs.readFileSync(this.path, 'utf-8'))
    }
}


module.exports = Data;