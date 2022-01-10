const food = require("./core");
const axios = require("axios");
const cheerio = require("cheerio");

let loadFridge = async () => {

    let fridge = []

    for (let i = 0; i < food.length; i++) {
        for (let j = 0; j < food[i].list.length; j++) {

            if (['cookbook', 'awards', 'equipment'].includes(food[i].name))
                continue

            // if ((!data[i].list[j].recipe && data[i].list[j].item !== false) || data[i].list[j].item === true)
            //     fridge.push({name: data[i].list[j].name, color: (data[i].list[j].color ? data[i].list[j].color : data[i].color), highlight: data[i].highlight})

            if ((!food[i].list[j].recipe && food[i].list[j].item !== false) || food[i].list[j].item === true)
                fridge.push({name: food[i].list[j].name})
            //, color: (food[i].list[j].color ? food[i].list[j].color : food[i].color), highlight: !!food[i].highlight
        }
    }

    console.log(fridge)

    for (let i = 0; i < fridge.length; i++) {
        fridge[i].index = await googleIndex(fridge[i].name)
        console.log(fridge[i].name + ': ' + fridge[i].index)
    }

    console.log(fridge.sort((a, b) => a.index > b.index))
}

let googleIndex = async (name) => {

    let url = 'https://www.google.com/search?q=' + name.replace(' ', '+') + '&hl=en'

    let response = await axios.get(url, {

        // timeout: 5000,
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        // browser only: 'blob'
        // TODO
        // responseType: 'document', // default
        headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'},
        // maxContentLength: 100000000,
        // maxBodyLength: 100000000,

    }).catch(function (error) {
        console.error(error)
    })

    const $ = cheerio.load(response.data)

    let text = $('#result-stats').text()
    let index = text.split(' ')[1]
    return index
}

// loadFridge().then(r => {})

let loadCoreImages = async (images) => {

    for (let i = 0; i < food.length; i++) {
        console.log(food[i].name)
        let recipes = food[i].list.filter(item => item.recipe === true)
        if (recipes.length > 0) {
            images[food[i].name] = {}

            for (let j = 0; j < recipes.length; j++) {

                let queryString = recipes[j].name.split(' ').length > 1 ?
                    recipes[j].name
                    :
                    recipes[j].name + '+' + food[i].name.replace('vegetables', 'veg')// + '+' + 'beautiful'

                images[food[i].name][recipes[j].name] = await loadImages(queryString)
            }
        }
    }
}

let loadImages = async (query) => {

    let imagesArray = []

    // google AIzaSyCb2KeZqQVklZCvAmiEPLnbEimTOb8GNTw

    let clientID = 'MZq1pQg9w6IBfa_nlzWd1PRk47g_NQgYr_qVRpvILlE'

    // cards frjPxPVuy8TBY16CU7KlZQAEopFlU21UGm84KlV0UB4

    // app JlxtO4Z40A34q4wNJ3MuOzL9oNwmZ8NsItP9KU1Cwuk

    // debug MZq1pQg9w6IBfa_nlzWd1PRk47g_NQgYr_qVRpvILlE

    // let url = 'https://api.unsplash.com/search/photos?query=' + encodeURIComponent(query) + '&client_id=' + clientID

    let url = 'https://www.google.com/search?q=' + query.replace(' ', '+') + '&tbm=isch&tbs=isz:l%2Cil:cl'
    // let url = 'https://www.bing.com/images/search?q=' + query.replace(' ', '%20') // + '&qft=+filterui:imagesize-large+filterui:photo-photo'

    console.log(url)

    let response = await axios.get(url, {

        // timeout: 5000,
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        // browser only: 'blob'
        // TODO
        // responseType: 'document', // default
        // headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        // maxContentLength: 100000000,
        // maxBodyLength: 100000000,

    }).catch(function (error) {console.error(error)})

    const $ = cheerio.load(response.data)

    let images = $('img')
    // console.log(images)

    for (let i = 0; i < images.length; i++) {
        // console.log(images[i].attribs.src)
        if (images[i].attribs.src && !images[i].attribs.src.startsWith('/'))
            imagesArray.push(images[i].attribs.src)
    }

    // console.log(response.data)

    // for (let i = 0; i < response.data.results.length; i++) {
    //     imagesArray.push(response.data.results[i].urls.small)
    //     // imagesArray.push(response.data.results[i].urls.thumb)
    // }

    return imagesArray
}

module.exports = {
    loadCoreImages
}