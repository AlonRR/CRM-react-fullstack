const express = require(`express`)
const router = express.Router()
const mongoose = require(`mongoose`)
const Client = require(`../models/Client.js`)
mongoose.connect(`mongodb://loca    lhost/crmDB`, { useNewUrlParser: true })

router.get(`/sanity`, function (req, res) {
    console.log(`im working`)
    res.send(`"Hi you have reached sanity leave a messege"`)
})
router.get(`/`, function (req, res) {
    res.send(`working`)
})
let count =0
router.get(`/clients`, function (req, res) {
    console.log(++count);
    Client.find({}, (err, clientList) => {
        // console.log(clientList);
        res.send(clientList);
    });
    
})
router.post(`/client`, function (req, res) {
    let newC = new Client(req.body)
    newC.save()
    .then(res.send())
})
router.put(`/client`, function (req, res) {
    Client.findOneAndUpdate(c=> c.name===req.params.name)
    res.end()
})

let saveData = function () {
    let data = require(`../../src/react-crm-starter-master/data.json`)
    data.forEach(c => {
        let newC = new Client(c)
        console.log(newC)
        newC.save()
    })
}
// saveData()

module.exports = router