class LSlogic {
    sorter = (data, sortBy, def) => {//gets obj sortBy-(filter), data-DB, def-defalt val
        if (!localStorage.sortType && !sortBy) {
            localStorage.setItem(`sortType`, def)
            sortBy = def
        } else if (sortBy) {
            localStorage.setItem(`sortType`, sortBy)
        } else {
            sortBy = localStorage.sortType
        }
        data.sort((c1, c2) => {
            let check = false
            if (sortBy === `surname`) {
                sortBy = `name`
                check = true
            }
            if (!c1[sortBy]) { return 1 }
            if (!c2[sortBy]) { return -1 }
            let thing1 = c1[sortBy].toLowerCase()
            let thing2 = c2[sortBy].toLowerCase()
            if (check) {
                thing1 = thing1.split(` `)[1]
                thing2 = thing2.split(` `)[1]
            }
            return thing1 > thing2 ? 1 : thing2 > thing1 ? -1 : 0
        })
        // console.log(data)
        return data
    }
    filter = (data, filterBy) => {//using startswith() is n^2, using tree can be less , use tree?
        // fliter has 2 params: place-is place , param -looking for(localStorge.filter)
        if(!localStorage.filter && !filterBy){
            let newIndexer =data.map((c,i)=>i)
            // console.log(newIndexer)
            return newIndexer
        } else if(!filterBy){
            filterBy = localStorage.filter
        } else {
            localStorage.setItem(`filter`,filterBy)
        }
        let indexer = []
        let LSType = localStorage.sortType
        data.map((client, i) => {
            let place
            if (LSType === `surname`) {
                place = client.name.split(` `)
                place = place[1].toLowerCase()
            } else if (client[LSType]) {
                place = client[LSType].toLowerCase()
            } else {
                return
            }
            if (place.startsWith(filterBy)) {
                indexer.push(i)
            }
        })
        // console.log(indexer)
        return indexer
    }
    filterRes=()=>{localStorage.setItem(`filter`,``)}
}
const Lslogic = new LSlogic
export default Lslogic