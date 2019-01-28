const express = require(`express`)
const bodyParser = require(`body-parser`)
// const path = require(`path`)
const api = require(`./server/routes/routes`)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(static.path)
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    next()
})

app.use(`/`, api)
const PORT = 4000
app.listen(PORT, function () {
    console.log(`listeing on port ${PORT}`)
})