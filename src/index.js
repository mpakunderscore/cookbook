import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './ui/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('app')
    )
})

serviceWorkerRegistration.register()