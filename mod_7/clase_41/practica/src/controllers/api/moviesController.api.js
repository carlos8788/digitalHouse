const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const data = await db.Movie.findAll()
        console.log(data.length)
        res.send(data)
    }
}