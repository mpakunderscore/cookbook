import React, {useEffect, useState} from 'react'
import Pages from "./Pages"
import Modal from "./Modal";
import Fridge from "./Fridge";
import {loadImages} from "../api";

let getAndroidVersion = () => {
    let match = navigator.userAgent.toLowerCase().match(/android\s([0-9.]*)/i)
    return match ? match[1] : -1
}

let androidVersion = getAndroidVersion()
console.log(androidVersion)

let isFast = !(androidVersion > 0 && androidVersion < 11)

function App() {

    // Initialize deferredPrompt for use later to show browser install prompt.
    let [deferredPrompt, setDeferredPrompt] = useState()

    let [images, setImages] = useState({})

    let initPWA = () => {

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            setDeferredPrompt(e)
            // Update UI notify the user they can install the PWA
            // showInstallPromotion();
            // Optionally, send analytics event that PWA install promo was shown.
            console.log(`'beforeinstallprompt' event was fired.`);
        });
    }

    let installPWA = async () => {

        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const {outcome} = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
    }

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
        // document.body.style.background = color
    }

    console.log(modal)

    useEffect(async () => {
        initPWA()

        loadImages().then(images => {
            console.log(images)
            setImages(images)
        })
    }, [])

    return (
        <div className={'container'}>

            <Pages isFast={isFast} installPWA={installPWA} changeTheme={changeTheme} setModal={setModal} display={!modal}/>

            {modal ?
                modal.name === 'fridge' ?

                    <Fridge changeTheme={changeTheme} modal={modal} setModal={setModal}/>
                    :
                    <Modal images={images} changeTheme={changeTheme} modal={modal} setModal={setModal}/>

                : ''
            }

        </div>
    )
}

export default App

