import React, {useEffect, useState} from 'react'
import Pages from "./Pages"
import Modal from "./Modal";

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

    let [modal, setModal] = useState(false)
    // let [email, setEmail] = useState(localStorage.getItem('email'))

    let changeTheme = (color) => {
        let metaThemeColor = document.querySelector('meta[name=theme-color]')
        metaThemeColor.setAttribute('content', color)
    }

    return (
        <div className={'container'}>
            {modal && <Modal changeTheme={changeTheme} setModal={setModal}/>}
            <Pages changeTheme={changeTheme} setModal={setModal}/>
        </div>
    )
}

export default App

