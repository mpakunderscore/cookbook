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

    return (
        <div className={'container'}>
            {modal && <Modal setModal={setModal}/>}
            <Pages setModal={setModal}/>
        </div>
    )
}

export default App

