const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const data = await db.Movie.findAll()
        console.log(data.length)
        res.send(data)
    },
    create: async (req, res) =>{
        const movie = req.body
        console.log(movie);
        const data = await db.Movie.create(req.body)
        res.json(data)
    },
    delete: async (req, res) => {
        const result = await db.Movie.destroy({ where: { id: req.params.id } })
        res.json(result)
    },
    detail: async (req, res) => {
        const result = await db.Movie.findByPk(req.params.id)
        res.json(result)
    },
}