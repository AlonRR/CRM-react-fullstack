const express = require(`express`)
const router = express.Router()
const mongoose = require(`mongoose`)
const Client = require(`../models/Client.js`)
mongoose.connect(`mongodb://localhost/crmDB`, { useNewUrlParser: true })

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
    Client.findByIdAndUpdate(req.body._id,req.body)
    .then(
        res.send(`done`)
    )
})
router.get(`/analytics`,async function(req,res){
    let analytics = {}
    let data = await Client.find()
    // console.log(data)
    // analytics.newClients = data.count(client=>client.firstContact>new Date(2018,09,01))
    //sales by country
    analytics.hottestCountry={}
    data.map(client=>{
        if(!analytics.hottestCountry[client.country]){
            analytics.hottestCountry[client.country] = 1
        } else{
            analytics.hottestCountry[client.country] += 1
        }
    })
    // console.log(analytics)
    res.send(analytics)
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