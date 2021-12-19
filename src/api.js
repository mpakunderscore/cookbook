let limit = 100

let newLinks = '/links/new/' + limit + '?words='
let hotLinks = '/links/hot/' + limit + '?words='
let topLinks = '/links/top/' + limit + '?words='

let crawler = '/crawler'
let domains = '/domains'

let words = '/words/memory/' + limit

module.exports = {
    newLinks, hotLinks, topLinks, crawler, domains, words
}