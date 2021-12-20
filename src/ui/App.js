import React, {useEffect, useState} from 'react'
import Pages from "./Pages"

function App() {

    let setDark = () => {
        console.log('change theme')
        let theme = localStorage.getItem('theme')
        theme = theme === 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }

    let theme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', theme)

    return (
        <div>
            <Pages/>
        </div>
    )
}

export default App

