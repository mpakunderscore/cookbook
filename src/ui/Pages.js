import React, {useEffect, useState, useRef} from 'react'
import api, {loadFood, loadUser} from "../api";
import eventBus from "../EventBus";

let all = 145

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

    const ref = useRef(null)

    useEffect(() => {

        loadFood().then(data => {
            setData(data)
        })

        console.log(email)

        if (email)
            loadUser(email)
        else {
            let user = JSON.parse(localStorage.getItem('user') || '{}')
            setUserData(user)
            setCount(user.count ? user.count : 0)
        }

    }, [])

    let submitLogin = () => {

        let email = document.getElementById('email').value
        console.log(email)

        let user = JSON.parse(localStorage.getItem('user') || '{}')
        console.log(user)

        loadUser(email, user)

        localStorage.setItem('email', email)
        setLogin(false)
        setEmail(email)
    }

    let updateUser = () => {
        loadUser(email, userData)
    }

    let sendMessage = () => {
        let message = document.getElementById('message').value
        sendMessage(message)
        setFeedback(false)
    }

    let renderPages = () => {
        let count = 0
        let pages = []
        // let user = {}
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            count += item.list.length
            // user[item.name] = {}

            let userSelected = (userData[item.name] ? (Object.keys(userData[item.name]).filter(key => userData[item.name][key] === true)).length : 0)

            pages.push(
                <div className={'card ' + (active === i ? 'active' : '') + (item.highlight ? ' highlight' : '')}
                     onClick={(active === i ? null : () => {
                         let metaThemeColor = document.querySelector('meta[name=theme-color]')
                         metaThemeColor.setAttribute('content', item.color)
                         setActive(i)
                     })}
                     style={{background: item.color}} key={item.name}>

                    <div className={'name'}>
                        {active === i && item.name !== 'food' ? <span>{userSelected + '/' + item.list.length}</span> : ''}
                        {item.name.toUpperCase()}
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
                                <div onClick={sendMessage}>SEND</div>
                            </div>
                        </div>
                        : ''}

                    {(item.name === 'food' && profile) ?
                        <div>
                            <input id={'message'} spellCheck={true} autoFocus={true} placeholder={'MESSAGE'} type={'text'}/>
                            <div className={'list'}>
                                <div onClick={() => setFeedback(false)}>BACK</div>
                                <div onClick={sendMessage}>SEND</div>
                            </div>
                        </div>
                        : ''}
                </div>
            )
        }

        // console.log(count)
        // console.log(user)

        return pages
    }

    let renderList = (groupName, itemList) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length
        //itemList.length

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
                     onClick={() => selectItem(groupName, name)}>
                    {name.toUpperCase()}
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

            updateUser()
        }
    }

    let clear = () => {
        localStorage.setItem('email', '')
        localStorage.setItem('user', JSON.stringify({}))
        setCount(0)
        setUserData({})
        setLogin(false)
        setEmail(false)
    }

    // renderPages(data)

    return (
        <div id={'pages'}>
            {renderPages()}
        </div>
    )
}