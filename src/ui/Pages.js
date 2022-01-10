import React, {useEffect, useState, useRef} from 'react'
import api, {loadActivePageIndex, loadFood, loadUser, sendMessage} from "../api";
import eventBus from "../EventBus";

let all = 210
let colors = {}
let emoji = {}

export default function Pages(props) {

    // eventBus.on('theme', (data) => {
    //
    //     props.changeTheme(data[active].color)
    // })

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
    // let [position, setPosition] = useState()

    const ref = useRef(null)

    useEffect(async () => {

        // console.log(href)

        // props.changeTheme(item.color)
        // setActive()

        let pageIndex = loadActivePageIndex()

        console.log(pageIndex)

        loadFood().then(async data => {

            setData(data)
            // console.log(data)

            loadFridge(data)

            if (email) {
                console.log('email: ' + email)
            }

            let userData = await loadUser(email)

            console.log(userData)

            if (!userData['awards'])
                userData['awards']= {}

            if (email && !userData['awards']['postal']) {
                userData['awards']['postal'] = true
            }

            if (!userData['awards']['elder']) {
                userData['awards']['elder'] = true
            }

            setUserData(userData)
            setCount(userData.count)

            if (pageIndex !== 0)
                setTimeout(() => {
                    setCardActive(pageIndex, data, loadActivePageIndex(), userData)
                }, 200)

        })

        // setCardHeight(active, data)

    }, [])

    let loadFridge = (data) => {
        let fridge = []
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].list.length; j++) {

                if (['cookbook', 'awards', 'equipment'].includes(data[i].name))
                    continue

                // if ((!data[i].list[j].recipe && data[i].list[j].item !== false) || data[i].list[j].item === true)
                //     fridge.push({name: data[i].list[j].name, color: (data[i].list[j].color ? data[i].list[j].color : data[i].color), highlight: data[i].highlight})

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
        forceUpdate()

        props.setUnlocked({name: 'postal', color: 'rgb(50, 50, 50)', emoji: ''})
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

    let setCardActive = (i, data, j = loadActivePageIndex(), userData) => {

        if (!data)
            return

        if (!userData)
            return

        // setPosition(j)
        // console.warn(j)
        // console.log(data)
        let oldCard = document.getElementById('card_' + data[active].name)
        oldCard.style.height = '89px'

        setActive(i)
        props.changeTheme(data[i].color)
        // location.href = '#' + item.name

        loadActivePageIndex(i)

        setCardHeight(i, data, userData, j)

        // setTimeout(function () {
        //     window.scroll({left: 0, top: 89 * j, behavior: 'smooth'})
        // }, 400)

        window.scroll({left: 0, top: 89 * j, behavior: 'smooth'})

        // element.scrollIntoView({
        //     behavior: 'smooth'
        // });
    }

    // window.addEventListener("wheel", (e) => scrollToSection(e), {passive: false})

    // const scrollToSection = (e) => {e.preventDefault()}

    let setCardHeight = (i, data, userData, j) => {

        if (!data[i])
            return

        let cardList = data[i].list
        let listLength = cardList.length >= 6 ? 6 : cardList.length

        for (let j = 0; j < listLength; j++) {
            // console.log(userData)
            // console.log(data[i].name)
            // console.log(data[i].list[j].name)
            // // console.log()
            // // console.log()
            let active = userData[data[i].name] && userData[data[i].name][data[i].list[j].name]
            // console.log(active)
            if (active) {
                if (cardList.length >= listLength) {
                    if (cardList.length > listLength + 3)
                        listLength = listLength + 3
                    else
                        listLength = cardList.length
                }
            }
        }

        let card = document.getElementById('card_' + data[i].name)
        let textHeight = card.getElementsByClassName('text')[0].clientHeight
        // let helpHeight = card.getElementsByClassName('help')[0].clientHeight
        // console.log(listLength)
        card.style.height = 89 + textHeight + 20 +

            Math.ceil((
                listLength +
                (data[i].name === 'vegetables' && listLength > 12 || profile ? 1 : 0)
            ) /3) * 86

            + 'px'
        // card.style.height = 89 + 'px'
        // console.log(card.style.height)

        // document.getElementById('app').scrollIntoView({
        //     left: 0,
        //     top: 89 * j,
        //     behavior: 'smooth'
        // });
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
            emoji[data[i].name] = data[i].emoji

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
        (props.isFast ? ' fast' : '') +
        (!unlockedPage && !item.unlocked ? ' locked' : '')
        }
                    id={'card_' + item.name}
                    onClick={(!isActive && (unlockedPage || item.unlocked) ? () => {setCardActive(item.i, data, j, userData)} : () => {})}
                    style={{background:
                            (item.name !== 'fridge' ? item.color : !isActive ? '#2c2c2c' : (light ? item.color : item.color2))

                    }} key={item.name}>

            <div className={'name'} style={item.name === 'cookbook' ? {textAlign: 'left'} : {}} onClick={!isActive ? null : () => {

                if (item.name === 'fridge') {
                    setLight(!light)
                    props.changeTheme(!light ? item.color : item.color2)
                } else {
                    setCardActive(0, data, 0, userData)
                }
            }}>
                {isActive && item.name !== 'cookbook' ? <span className={'count'}>{userSelected + '/' + item.list.length}</span> : ''}
                {!unlockedPage && !item.unlocked ? <span className={'lock'}>🔒</span> : ''}
                {item.name === 'fridge' && !isActive ? <span className={'lock'}>🧊</span> : ''}
                {item.name.toUpperCase()
                    // :
                    // (item.name === 'fridge' && isActive ? '💡' : item.name.toUpperCase())
                }
            </div>

            {/*<div className={'title'}>{item.title}</div>*/}
            <div className={'text'}>{item.text}</div>

            {item.name === 'eggs' || item.name === 'breakfast' ? <div className={'yolk'}></div> : ''}

            {item.name === 'vegetables' ? <div className={'leaf'}></div> : ''}

            {item.name === 'drinks' ? <div className={'bubble'}><div className={'bubble2'}></div></div> : ''}

            {/*{item.name === 'meat' ? <div className={'bone'}></div> : ''}*/}

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

        // console.warn(i)

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

            if (groupName === 'cookbook' && name === 'sync' && email)
                itemList[i].name = 'profile'

            if (groupName === 'cookbook' && name === 'unlocked')
                name += ' ' + count + '/' + all


            if (groupName === 'cookbook' && name === 'settings')
                name = VERSION.substring(0, 7) + ' ' + (props.isFast ? 'fast' : 'slow')

            if (groupName === 'awards' && !active && !itemList[i].active)
                name = '🏆'

            // console.log(name)

            list.push(
                <div key={i + name}
                     className={'chips ' + (active || groupName === 'fridge' ? 'active' : '')}
                     style={name === 'ratatouille' ? {width: 'calc((100% - 40px)/3 * 2 + 10px)'} : {}}
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

            if (name === 'sync') {
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

            if (name === 'fridge') {
                let fridgeModal = {
                    name: 'fridge',
                    group: 'kitchen',
                    list: fridge,
                    color: item.color,
                    cancel: () => {
                        props.changeTheme(data[active].color)
                    }
                }

                console.log(fridgeModal)
                props.setModal(fridgeModal)
            }

            if (name === 'settings') {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                }
                location.reload()
            }

        } else {

            if (unlockPage && !userData[name]) {

                let unlockedName = ''

                if (typeof unlockPage === 'string') {
                    unlockedName = unlockPage
                } else {
                    unlockedName = name
                }

                userData[unlockedName] = {}
                props.setUnlocked({name: unlockedName, color: colors[unlockedName], emoji: emoji[unlockedName]})
                props.changeTheme(colors[unlockedName])
            }

            if (!userData[group])
                userData[group] = {}

            if (isRecipe) {

                props.setModal({color: data[active].color, name: name, group: group, state: !!userData[group][name],
                    highlight: data.find(item => item.name === group).highlight,
                    accept: () => {
                        setUserAccept(group, name)
                        setCardHeight(active, data, userData)
                }, cancel: () => {
                    // props.changeTheme(data[active].color)
                }})

            } else {

                setUserAccept(group, name)

            }

            setCardHeight(active, data, userData)

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