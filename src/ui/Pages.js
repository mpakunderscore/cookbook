import React, {useEffect, useState, useRef} from 'react'
import api, {loadFood, loadUser, sendMessage} from "../api";
import eventBus from "../EventBus";

let all = 527
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

    const ref = useRef(null)

    useEffect(async () => {

        // console.log(href)

        loadFood().then(data => {
            setData(data)
        })

        console.log('email: ' + (email ? email : false))

        let userData = await loadUser(email)
        console.log(userData)
        setUserData(userData)
        setCount(userData.count)

    }, [])

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

    let setCardActive = (i, item) => {
        setActive(i)
        props.changeTheme(item.color)
        // location.href = '#' + item.name
        window.scroll(0, 86 * i)

    }

    let renderPages = () => {

        let count = 0
        let pages = []
        // let user = {}

        let unlockedPages = true

        for (let i = 0; i < data.length; i++) {
            colors[data[i].name] = data[i].color
        }

        for (let i = 0; i < data.length; i++) {

            let item = data[i]
            count += item.list.length
            // user[item.name] = {}

            if (item.name === href && active !== i)
                setActive(i)

            let userSelected = (userData[item.name] ? (Object.keys(userData[item.name]).filter(key => userData[item.name][key] === true)).length : 0)

            // if (!unlockedPages) {
            //
            //     let pagesLayers = []
            //
            //     for (let j = i; j < data.length; j++) {
            //         pagesLayers.push(
            //             <div key={data[j].name} style={{background: data[j].color}}></div>
            //         )
            //     }
            //
            //     pages.push(
            //         <div className={'card locked'} key={'locked'}>
            //             {/*<div className={'name'}></div>*/}
            //             {shuffleArray(pagesLayers)}
            //         </div>
            //     )
            //
            //     i = data.length
            //     continue
            // }

            pages.push(
                <div className={'card ' + (active === i ? 'active' : '') + (item.highlight ? ' highlight' : '') + (!unlockedPages ? ' locked' : '')}
                     onClick={(active === i || (!unlockedPages) ? null : () => {
                         setCardActive(i, item)
                     })}
                     style={{background: item.color}} key={item.name}>

                    <div className={'name'} style={item.name === 'food' ? {textAlign: 'left'} : {}}>
                        {active === i && item.name !== 'food' ? <span className={'count'}>{userSelected + '/' + item.list.length}</span> : ''}
                        {!unlockedPages ? <span className={'lock'}>🔒</span> : ''}
                        {item.name === 'food' ? item.title.toUpperCase() : (unlockedPages ? item.name.toUpperCase() : item.name.toUpperCase())}
                    </div>

                    {/*<div className={'title'}>{item.title}</div>*/}
                    <div className={'text'}>{item.text}</div>

                    {item.name === 'eggs' ? <div className={'yolk'}></div> : ''}

                    {(login || feedback) ? '' : <div className={'list'}>
                        {renderList(item.name, item.list)}
                        {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                        {/*<div>{item.list[1].name}</div>*/}
                        {/*<div>{item.list[2].name}</div>*/}
                    </div>}

                    {(item.name === 'food' && login) ?
                    <div>
                        <input id={'email'} spellCheck={false} autoFocus={true} placeholder={'E-MAIL'} type={'email'}/>
                        <div className={'list'}>
                            <div onClick={() => setLogin(false)}>BACK</div>
                            <div onClick={submitLogin}>SUBMIT</div>
                        </div>
                    </div>
                        : ''}

                    {(item.name === 'food' && feedback) ?
                        <div>
                            <input id={'message'} spellCheck={true} autoFocus={true} placeholder={'MESSAGE'} type={'text'}/>
                            <div className={'list'}>
                                <div onClick={() => setFeedback(false)}>BACK</div>
                                <div onClick={submitMessage}>SEND</div>
                            </div>
                        </div>
                        : ''}

                    {(item.name === 'food' && profile) ?
                        <div>
                            <input value={email} disabled={true} style={{'text-align': 'center'}}/>
                        </div>
                        : ''}
                </div>
            )

            if (item.name === 'fridge') {
                unlockedPages = false
                // pages.push(
                //     <div key={'locked'} className={'card highlight'}>
                //         <div className={'name'}>🔒</div>
                //     </div>
                // )
            }
        }

        // console.log(count)
        // console.log(user)

        return pages
    }

    let renderList = (groupName, itemList) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length

        if (groupName === 'food')
            listLength = 6

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
            if (groupName === 'food' && name === 'login' && email)
                name = 'profile'

            if (groupName === 'food' && name === 'unlocked')
                name += ' ' + count + '/' + all

            // console.log(name)

            list.push(
                <div key={name}
                     className={(active ? 'active' : '')}
                     onClick={() => {
                         if (groupName !== 'awards')
                             selectItem(groupName, name)
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

        // console.log(page, item)
        if (group === 'food') {

            if (item === 'feedback') {
                setFeedback(true)
            } else {
                setFeedback(false)
            }

            if (item === 'basket') {
                props.setModal(true)
            }

            if (item === 'restart') {
                clear()
            }

            if (item === 'login') {
                setLogin(true)
            } else {
                setLogin(false)
            }

            if (item === 'profile') {
                setProfile(true)
            } else {
                setProfile(false)
            }

        } else {

            if (!userData[group])
                userData[group] = {}

            userData[group][item] = !userData[group][item]
            userData.count = count + (userData[group][item] ? 1 : -1)

            setUserData(userData)
            setCount(userData.count)
            localStorage.setItem('user', JSON.stringify(userData))
            console.log(userData)


            forceUpdate()

            updateUser().then()
        }
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