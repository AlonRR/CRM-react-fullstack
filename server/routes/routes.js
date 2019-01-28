const express = require(`express`)
const mongoose = require(`mongoose`)
const Client = require(`../models/Client.js`)
const analytics = require(`../logic/analytics`)
const router = express.Router()
mongoose.connect(`mongodb://localhost/crmDB`, { useNewUrlParser: true })

let countOfConnectionReqests = 0

router.get(`/`, function (req, res) {//sanity check
    console.log(`im working`)
    res.send(`"Hi you have reached sanity leave a messege"`)
})
router.get(`/clients`, function (req, res) {
    console.log(++countOfConnectionReqests);
    Client.find({})
        .then((clientList) => {
            res.send(clientList);
        })
})
router.post(`/client`, function (req, res) {
    let newC = new Client(req.body)
    newC.save()
    .then(()=>res.end())
})
router.put(`/client`, function (req, res) {
    Client.findByIdAndUpdate(req.body._id, req.body)
        .then(
            res.end()
        )
})
router.get(`/analytics`, async function (req, res) {
    let data = await Client.find()
    // console.log(data)
    // analytics.newClients = data.count(client=>client.firstContact>new Date(2018,09,01))
    //sales by country
    let sortedData = await analytics.module.dataSorter(data)
    res.send(sortedData)
})











// Client.find({ firstContact:{ $gte: new Date(2018,09) }})
// .then(rs=>{
//     console.log(rs.length)
//     res.send(rs)
// }).catch(err=>console.log(err))
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