const food = require("../core");
const cheerio = require("cheerio")
const {getUsers, getUser, updateUser, getMessages, saveMessage} = require("./database/database")
const axios = require("axios");

let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/food', async function (request, response) {
        response.json(food)
    })

    app.get(prefix + '/user', async (request, response) => {

        let email = request.query.email
        let userData = JSON.parse(request.query.user)
        let user = await updateUser(email, userData)
        response.json(user)
    })

    app.get(prefix + '/users', async (request, response) => {
        const links = await getUsers()
        response.json(links)
    })

    app.get(prefix + '/message', async (request, response) => {

        let messageText = request.query.text
        // let userData = JSON.parse(request.query.user)

        console.log(messageText)
        const message = await saveMessage(messageText)
        // const message = await getMessages()

        // let user = await saveUser(email, userData)
        response.json(message)
    })

    app.get(prefix + '/messages', async (request, response) => {
        const messages = await getMessages()
        response.json(messages)
    })

    app.get(prefix + '/images', async (request, response) => {
        response.json(images)
    })
}

let images = {}

let loadCoreImages = async () => {

    for (let i = 0; i < food.length; i++) {
        console.log(food[i].name)
        let recipes = food[i].list.filter(item => item.recipe === true)
        if (recipes.length > 0) {
            images[food[i].name] = {}

            for (let j = 0; j < recipes.length; j++) {

                let queryString = recipes[j].name.split(' ').length > 1 ?
                    recipes[j].name
                    :
                    food[i].name.replace('vegetables', 'veg') + ' ' + recipes[j].name

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

loadCoreImages().then()

module.exports = {
    initAPI
}