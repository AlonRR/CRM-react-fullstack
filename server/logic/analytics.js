// const express = require(`express`)
const moment = require(`moment`)
class Analytics {
    dataSorter(data) {
        let newData = {
            data: {
                country: {},
                owner: {},
                emailType: {},
                month: {},
            },
            sales: {},
            badges: {
                hottestCountry: ``,//
                newClients: 0,//
                outstandingClients: 0,
                emailsSent: 0//
            }
        }
        let allData = newData.data
        let badges = newData.badges
        data.forEach(client => {
            if (!client.sold) {
                badges.outstandingClients += 1
                Object.keys(allData).forEach(item => {
                    if (item === `month`) {
                        // newData.sales.push(client.firstContact)
                        let numMonth = client.firstContact.getMonth() + 1
                        let numYear = client.firstContact.getUTCFullYear()
                        // console.log(numYear)
                        // console.log(numMonth)
                        if (!allData.month[numMonth]) {
                            allData.month[numMonth] = 1
                        } else {
                            allData.month[numMonth] += 1
                        }
                        if(!newData.sales[`${numYear}${numMonth}`]){
                            newData.sales[`${numYear}${numMonth}`] = 1
                        } else {
                            newData.sales[`${numYear}${numMonth}`] += 1
                        }
                    } else if (!allData[item][client[item]]) {
                        allData[item][client[item]] = 1
                    } else {
                        allData[item][client[item]] += 1
                    }
                })
            }
            if (client.firstContact > new Date(`2018-09`)) {
                badges.newClients += 1
            }
            if (client.emailType) {
                badges.emailsSent += 1
            }
        })
        let tempVal = 0
        for (let name in allData.country) {
            if (allData.country[name] > tempVal) {
                badges.hottestCountry = name
                tempVal = allData.country[name]
            }
        }

        return newData
    }
}
const analytics = new Analytics
exports.module = analytics