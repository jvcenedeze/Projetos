const { default: axios } = require('axios')
const express = require('express')
const routes = express.Router()


let db = [
    {memory: "[5,4,5,1,6,4,7,2.8,5,4.7,6]"},
    {xMemory: "['1','2','3','4','5','6','7','8','9','10','11']"}
]

routes.get('/', async(req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)

})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes