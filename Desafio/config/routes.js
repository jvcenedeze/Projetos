const { default: axios } = require('axios')
const express = require('express')
const routes = express.Router()


let db = {
    memory: [5,4,5,1,6,4,7,2.8,5,4.7,6],
    xMemory: ['1','2','3','4','5','6','7','8','9','10','11'],
    visitors: [4,4.2,3.9,5,3.3,4.8,3,5.6,4,4.1,2.2],
    xVisitors: ["1","2","3","4","5","6","7","8","9","10","11"],
    newUser: [5,4.7,5.1,4,5.5,3.8,5.8,5,5.3,5,4.7],
    xNewUser: ["1","2","3","4","5","6","7","8","9","10","11"],
    serverReqA: [20,32,25,45,5,55,24,53,46,27,75],
    serverReqB: [9,23,15,27,2,25,6,43,25,18,50],
    xServerReq: ["14.00","14.10","14.20","14.30","14.40","14.50","14.60","15.00","15.10","15.20","15.30"],
    visitors2: [1000,600,1300,982,480,1370,920],
    xVisitors2: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    summary: [942,25,2452],
    summaryShow: [27,23,33],
    xSummary: ["Fixed Servers", "Down Server", "Running"],
    serverStatus: [3,5.5,5.5,3.8,5.3,2,6],
    xServerStatus: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
}

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