const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const data = await db.Actor.findAll()
        console.log(data.length)
        res.send(data)
    },
    create: async (req, res) =>{
        const data = await db.Actor.create(req.body)
        res.json(data)
    },
    delete: async (req, res) => {
        const result = await db.Actor.destroy({ where: { id: req.params.id } })
        res.json(result)
    },
    detail: async (req, res) => {
        const result = await db.Actor.findByPk(req.params.id)
        res.json(result)
    },
}