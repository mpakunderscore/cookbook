import React, {useEffect, useState, useRef} from 'react'
import api, {loadActivePage, loadFood, loadUser, sendMessage} from "../api";
import eventBus from "../EventBus";
import {is} from "cheerio/lib/api/traversing";

let all = 210
let colors = {}

export default function Pages(props) {

    const [, updateState] = React.useState()
    const forceUpdate = React.useCallback(() => updateState({}), [])

    let [userData, setUserData] = useState({})
    let [count, setCount] = useState(0)

    let [pages, setPages] = useState([])
    let [active, setActive] = useState(0)
    let [data, setData] = useState([])

    let [login, setLogin] = useState(false)
    let [feedback, setFeedback] = useState(false)
    let [profile, setProfile] = useState(false)

    let [email, setEmail] = useState(localStorage.getItem('email'))

    let [href, setHref] = useState(location.href.split('#')[1])

    let [fridge, setFridge] = useState([])

    let [light, setLight] = useState(true)
    let [position, setPosition] = useState()

    const ref = useRef(null)

    useEffect(async () => {

        // console.log(href)

        // props.changeTheme(item.color)
        // setActive()

        let pageIndex = loadActivePage()
        console.log(pageIndex)

        loadFood().then(data => {

            setData(data)
            // console.log(data)

            setCardActive(pageIndex, data)

            loadFridge(data)
        })

        if (email) {
            console.log('email: ' + email)
        }

        let userData = await loadUser(email)
        console.log(userData)

        if (email && !userData['awards']['postal']) {
            userData['awards']['postal'] = true
        }

        if (!userData['awards']['elder']) {
            userData['awards']['elder'] = true
        }

        setUserData(userData)
        setCount(userData.count)

    }, [position])

    let loadFridge = (data) => {
        let fridge = []
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].list.length; j++) {

                if (['cookbook', 'awards', 'equipment'].includes(data[i].name))
                    continue

                if ((!data[i].list[j].recipe && data[i].list[j].item !== false) || data[i].list[j].item === true)
                    fridge.push({name: data[i].list[j].name, color: (data[i].list[j].color ? data[i].list[j].color : data[i].color), highlight: data[i].highlight})
            }
        }

        setFridge(fridge)
        // console.log(fridge)
    }

    let submitLogin = async () => {

        let email = document.getElementById('email').value
        localStorage.setItem('email', email)
        console.log(email)

        let userData = await loadUser(email)
        setUserData(userData)
        setCount(userData.count)

        setLogin(false)
        setEmail(email)
    }

    let updateUser = async () => {
        await loadUser(email)
    }

    let submitMessage = () => {
        let message = document.getElementById('message').value
        sendMessage(message)
        setFeedback(false)
    }

    // let shuffleArray = (array) => {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return array
    // }

    let setCardActive = (i, data, j) => {

        setPosition(j)
        console.warn(j)
        console.log(data[i].name)

        setActive(i)
        props.changeTheme(data[i].color)
        // location.href = '#' + item.name

        loadActivePage(i)

        if (j)
            window.scroll(0, 86 * j)
    }

    let renderPages = () => {

        let allItemsCounter = 0
        let allFridgeItemsCounter = 0
        let allRecipesCounter = 0

        let pages = []
        // let user = {}

        let unlockedPages = true



        // COLORS
        for (let i = 0; i < data.length; i++) {
            data[i].i = i
            colors[data[i].name] = data[i].color

            if (data[i].name !== 'awards' && data[i].name !== 'cookbook' && data[i].name !== 'fridge')
                allItemsCounter += data[i].list.length
        }

        let unlockedData = data.filter(item => item.unlocked === true || userData[item.name])

        let lockedData = data.filter(item => !item.unlocked && !userData[item.name])

        // PAGES HERE
        for (let i = 0; i < unlockedData.length; i++) {

            if (unlockedData[i].name === 'awards') {
                lockedData.push(unlockedData[i])
                continue
            }

            pages.push(generateCard(unlockedData[i], true, i))

            if (unlockedData[i].name === 'fridge') {
                unlockedData[i].list = fridge
            }
        }

        for (let i = 0; i < lockedData.length; i++) {

            pages.push(generateCard(lockedData[i], !!lockedData[i].unlocked,unlockedData.length + i))
        }

        // pages.push(generateCard(data.find(item => item.name === 'awards'), true, 0))

        // console.log(allItemsCounter)
        // console.log(allFridgeItemsCounter)
        // console.log(allRecipesCounter)

        // console.log(user)

        return pages
    }

    let generateCard = (item, unlockedPage, j) => {

        // console.log(item)

        let userSelected = (userData[item.name] ? (Object.keys(userData[item.name]).filter(key => userData[item.name][key] === true)).length : 0)

        let isActive = active !== -1 && data[active].name === item.name

        return <div className={'card ' +
        (isActive ? 'active' : '') +
        (item.highlight ? ' highlight' : '') +
        (!unlockedPage && !item.unlocked ? ' locked' : '')
        }
                    id={'card_' + item.name}
                    onClick={(!isActive && (unlockedPage || item.unlocked) ? () => {setCardActive(item.i, data, j)} : () => {})}
                    style={{background:
                            (item.name !== 'fridge' ? item.color : !isActive ? '#2c2c2c' : (light ? item.color : item.color2))

                    }} key={item.name}>

            <div className={'name'} style={item.name === 'cookbook' ? {textAlign: 'left'} : {}} onClick={!isActive ? null : () => {

                if (item.name === 'fridge') {
                    setLight(!light)
                } else {
                    setActive(0)
                    props.changeTheme(data[0].color)
                }
            }}>
                {isActive && item.name !== 'cookbook' ? <span className={'count'}>{userSelected + '/' + item.list.length}</span> : ''}
                {!unlockedPage && !item.unlocked ? <span className={'lock'}>🔒</span> : ''}
                {item.name === 'fridge' && !isActive ? <span className={'lock'}>🧊</span> : ''}
                {item.name === 'cookbook' ?
                    item.title.toUpperCase()
                    :
                    (item.name === 'fridge' && isActive ? '💡' : item.name.toUpperCase())
                }
            </div>

            {/*<div className={'title'}>{item.title}</div>*/}
            <div className={'text'}>{item.text}</div>

            {item.name === 'eggs' ? <div className={'yolk'}></div> : ''}

            {/*{item.name === 'fridge' && !isActive ? <div className={'categoryIcon'}>🧊</div> : ''}*/}

            {/*{item.name === 'awards' && !isActive ? <div className={'categoryIcon'}>🏆</div> : ''}*/}

            {(login || feedback) ? '' : <div className={'list'}>
                {renderList(item.name, item.list)}
                {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                {/*<div>{item.list[1].name}</div>*/}
                {/*<div>{item.list[2].name}</div>*/}
            </div>}

            {(item.name === 'cookbook' && login) ?
                <div>
                    <input id={'email'} spellCheck={false} autoFocus={true} placeholder={'E-MAIL'} type={'email'}/>
                    <div className={'list'}>
                        <div onClick={() => setLogin(false)}>BACK</div>
                        <div onClick={submitLogin}>SUBMIT</div>
                    </div>
                </div>
                : ''}

            {(item.name === 'cookbook' && feedback) ?
                <div>
                    <input id={'message'} spellCheck={true} autoFocus={true} placeholder={'MESSAGE'} type={'text'}/>
                    <div className={'list'}>
                        <div onClick={() => setFeedback(false)}>BACK</div>
                        <div onClick={submitMessage}>SEND</div>
                    </div>
                </div>
                : ''}

            {(item.name === 'cookbook' && profile) ?
                <div>
                    <input value={email} disabled={true} style={{textAlign: 'center'}}/>
                </div>
                : ''}
        </div>
    }

    let renderList = (groupName, itemList) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length

        if (groupName === 'cookbook' || groupName === 'fridge' || groupName === 'awards')
            listLength = itemList.length

        if (groupName === 'awards') {
            // itemList.push({name: 'competition', active: true})
            listLength = itemList.length
        }

        let list = []
        for (let i = 0; i < listLength; i++) {
            let active = userData[groupName] && userData[groupName][itemList[i].name]
            if (active) {
                if (itemList.length >= listLength) {
                    if (itemList.length > listLength  + 3)
                        listLength = listLength + 3
                    else
                        listLength = itemList.length
                }
            }

            let name = itemList[i].name

            // console.log(groupName)
            // console.log(name)
            // console.log(email)

            if (groupName === 'cookbook' && name === 'login' && email)
                itemList[i].name = 'profile'

            if (groupName === 'cookbook' && name === 'unlocked')
                name += ' ' + count + '/' + all

            if (groupName === 'cookbook' && name === 'settings')
                name = VERSION.substring(0, 7)

            if (groupName === 'awards' && !active && !itemList[i].active)
                name = '🏆'

            // console.log(name)

            list.push(
                <div key={i + name}
                     className={(active || groupName === 'fridge' ? 'active' : '')}
                     style={groupName === 'fridge' ? {background: itemList[i].color, color: itemList[i].highlight ? '#4c4c4c' : 'white'} : {}}
                     onClick={() => {
                         if (groupName !== 'awards' && groupName !== 'fridge')
                             selectItem(groupName, itemList[i])
                     }}>
                    {name.toUpperCase()}
                    {itemList[i].recipe ? <div className={'recipe'}></div> : ''}
                    {/*{itemList[i].page ? <div className={'page'} style={{background: colors[name]}}></div> : ''}*/}
                </div>
            )
        }

        return list
    }

    let selectItem = (group, item) => {

        console.log(item)

        let name = item.name
        let unlockPage = item.page
        let isRecipe = item.recipe


        // console.log(page, item)
        if (group === 'cookbook') {

            if (name === 'feedback') {
                setFeedback(true)
            } else {
                setFeedback(false)
            }

            if (name === 'basket') {
                // props.setModal(true)
            }

            if (name === 'restart') {
                clear()
            }

            if (name === 'login') {
                setLogin(true)
            } else {
                setLogin(false)
            }

            if (name === 'profile') {
                console.log('PROFILE')
                setProfile(true)
            } else {
                setProfile(false)
            }

            if (name === 'install') {
                props.installPWA()
            }

            // if (name === 'awards' || name === '🏆') {
            //     // console.log(data)
            //     let awards = data.find(item => item.name === 'awards')
            //     let awardsModal = {...awards, group: 'user'}
            //     props.setModal(awardsModal)
            // }

        } else {

            if (unlockPage && !userData[name]) {

                if (typeof unlockPage === 'string')
                    userData[unlockPage] = {}
                else
                    userData[name] = {}
            }

            if (!userData[group])
                userData[group] = {}

            if (isRecipe) {

                props.setModal({color: data[active].color, name: name, group: group, state: !!userData[group][name], accept: () => {
                        setUserAccept(group, name)
                    }
                })

            } else {

                setUserAccept(group, name)

            }

            forceUpdate()

            updateUser().then()
        }
    }

    let setUserAccept = (group, name) => {
        userData[group][name] = !userData[group][name]
        userData.count = count + (userData[group][name] ? 1 : -1)

        setUserData(userData)
        setCount(userData.count)
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(userData)
    }

    let clear = () => {
        localStorage.setItem('email', '')
        localStorage.setItem('user', JSON.stringify({count: 0}))
        setCount(0)
        setUserData({})
        setLogin(false)
        setEmail(false)
        setProfile(false)
    }

    // renderPages(data)

    return (
        <div id={'pages'} style={{visibility: props.display ? 'visible' : 'hidden'}}>
            {renderPages()}
        </div>
    )
}