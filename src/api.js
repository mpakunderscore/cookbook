const prefix = '/api'

let loadActivePage = (selected) => {

    if (selected || selected === 0)
        localStorage.setItem('active', selected)

    let active = localStorage.getItem('active') ? parseInt(localStorage.getItem('active')) : 0
    return active
}

let loadFood = () => {
    return fetch(prefix + '/food')
        .then(response => response.json())
        .then(data => {
            return data
        })
}

let loadUser = (email) => {

    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {count: 0}

    // console.log(user)

    if (!user.count)
        user.count = 0

    // console.log(user)

    if (!email)
        return user

    return fetch(prefix + '/user?email=' + email + '&user=' + JSON.stringify(user))
        .then(response => response.json())
        .then(serverUser => {
            return serverUser
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
    loadFood, loadUser, sendMessage, loadActivePage
}