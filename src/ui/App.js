import React, {useEffect, useState} from 'react'
import Links from "./Links"
import Tags from "./Tags";

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
            <Links/>
        </div>
    )
}

export default App

