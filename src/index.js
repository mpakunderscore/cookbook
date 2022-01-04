import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './ui/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

console.log(VERSION)

console.log(navigator.connection.downlink + ' Mbps')

console.log(navigator.language)

// console.log(navigator)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('app')
    )
})

serviceWorkerRegistration.register()