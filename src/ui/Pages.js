import React, {useEffect, useState, useRef} from 'react'
import api from "../api";
import eventBus from "../EventBus";

let all = 124

export default function Pages(props) {

    // let [state, setState] = useState('')
    //
    // let [firstActive, setFirstActive] = useState(false)
    //
    // let [scroll, setScroll] = useState(0)
    // let [newCount, setNewCount] = useState(0)
    //
    // // let [domainsOnly, setDomainsOnly] = useState([])
    // let [domainsNot, setDomainsNot] = useState([])
    //
    // let [langOnly, setLangOnly] = useState({})
    // // let [langNot, setLangNot] = useState([])
    //
    // let [linksArray, setLinksArray] = useState([])
    //
    // let [wordsFilter, setWordsFilter] = useState([])

    const [, updateState] = React.useState()
    const forceUpdate = React.useCallback(() => updateState({}), [])

    let [user, setUser] = useState({})
    let [count, setCount] = useState(0)

    let [pages, setPages] = useState([])
    let [active, setActive] = useState(0)
    let [data, setData] = useState([])

    const ref = useRef(null)

    useEffect(() => {

        loadGraph()

        // eventBus.on('tag', (data) => {
        //         console.log(data.message);
        //         if (data.message === 'crawler' || data.message === 'domains') {
        //             loadGraph(api[data.message])
        //         } else {
        //             loadGraph(api[data.message + 'Pages'])
        //         }
        //     }
        // )

        // eventBus.on('lang', (data) => {
        //         console.log(data.message);
        //         if (data.message === 'en') {
        //             setLangOnly({en: true})
        //         } else {
        //
        //         }
        //     }
        // )

        // eventBus.on('words', (data) => {
        //         console.log(data.message);
        //         setWords()
        //     }
        // )

        // window.onscroll = () => {
        //     setScroll(window.scrollY)
        //     // console.log(window.scrollY)
        // }

    }, [])


    const prefix = '/api'

    let loadGraph = () => {
        fetch(prefix + '/food')
            .then(response => response.json())
            .then(data => {
                setData(data)

                let user = JSON.parse(localStorage.getItem('user') || '{}')
                console.log(user)
                setUser(user)
                setCount(user.count ? user.count : 0)
                // console.log(data)
            })
    }

    let renderPages = () => {
        let count = 0
        let pages = []
        // let user = {}
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            count += item.list.length
            // user[item.name] = {}

            let userSelected = (user[item.name] ? (Object.keys(user[item.name]).filter(key => user[item.name][key] === true)).length : 0)

            pages.push(
                <div className={'card ' + (active === i ? 'active' : '') + (item.highlight ? ' highlight' : '')}
                     onClick={(active === i ? null : () => {setActive(i)})}
                     style={{background: item.color}} key={item.name}>
                    <div className={'name'}>
                        {active === i && item.name !== 'food' ? <span>{userSelected + '/' + item.list.length}</span> : ''}
                        {item.name.toUpperCase()}
                    </div>
                    {/*<div className={'title'}>{item.title}</div>*/}
                    <div className={'text'}>{item.text}</div>

                    {item.name === 'eggs' ? <div className={'yolk'}></div> : ''}

                    <div className={'list'}>
                        {renderList(item.list, item.name)}
                        {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                        {/*<div>{item.list[1].name}</div>*/}
                        {/*<div>{item.list[2].name}</div>*/}
                    </div>

                </div>
            )
        }

        // console.log(count)
        // console.log(user)

        return pages
    }

    let renderList = (itemList, name) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length
        //itemList.length

        let list = []
        for (let i = 0; i < listLength; i++) {
            let active = user[name] && user[name][itemList[i].name]
            if (active) {
                if (itemList.length >= listLength) {
                    if (itemList.length > listLength  + 3)
                        listLength = listLength + 3
                    else
                        listLength = itemList.length
                }
            }
            list.push(
                <div key={itemList[i].name}
                     className={(active ? 'active' : '')}
                     onClick={() => selectItem(name, itemList[i].name)}>
                    {itemList[i].name.toUpperCase()}
                    {(name === 'food' && itemList[i].name === 'unlocked') ? (' ' + count + '/' + all) : ''}
                </div>
            )
        }

        return list
    }

    let selectItem = (page, item) => {

        // console.log(page, item)
        if (page === 'food') {

            if (item === 'basket') {
                props.setModal(true)
            }

            if (item === 'restart') {
                clear()
            }

        } else {

            if (!user[page])
                user[page] = {}

            user[page][item] = !user[page][item]
            user.count = count + (user[page][item] ? 1 : -1)
            setUser(user)
            setCount(user.count)
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user)
            forceUpdate()
        }
    }

    let clear = () => {
        localStorage.setItem('user', JSON.stringify({}))
        setCount(0)
        setUser({})
    }

    // renderPages(data)

    return (
        <div id={'pages'}>
            {renderPages()}
        </div>
    )
}