const prefix = '/api'

let loadFood = () => {
    return fetch(prefix + '/food')
        .then(response => response.json())
        .then(data => {
            return data
        })
}

let loadUser = (email, userData) => {
    return fetch(prefix + '/user?email=' + email + '&user='+ userData)
        .then(response => response.json())
        .then(serverUser => {

            console.log(serverUser)

            let user = JSON.parse(localStorage.getItem('user') || '{}')
            console.log(user)
        })
}

let sendMessage = (message) => {
    return fetch(prefix + '/message?text=' + message)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

module.exports = {
    loadFood, loadUser, sendMessage
}