import React, {useEffect, useState, useRef} from 'react'
import api from "../api";
import eventBus from "../EventBus";

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

    }, [user])


    const prefix = '/api'

    let loadGraph = () => {
        fetch(prefix + '/food')
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }

    let renderPages = () => {
        let pages = []
        let user = {}
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            user[item.name] = {}
            pages.push(
                <div className={'card ' + (active === i ? 'active' : '')}
                     onClick={(active === i ? null : () => {setActive(i)})}
                     style={{background: item.color}} key={item.name}>
                    <div className={'title'}>{item.title.toUpperCase()}</div>

                    <div className={'list'}>
                        {renderList(item.list, item.name)}
                        {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                        {/*<div>{item.list[1].name}</div>*/}
                        {/*<div>{item.list[2].name}</div>*/}
                    </div>

                </div>
            )
        }

        console.log(user)

        return pages
    }

    let renderList = (itemList, name) => {

        let list = []
        for (let i = 0; i < itemList.length; i++) {
            list.push(
                <div key={itemList[i].name}
                     className={(user[name] && user[name][itemList[i].name] ? 'active' : '')}
                     onClick={() => selectItem(name, itemList[i].name)}>
                    {itemList[i].name.toUpperCase()}
                </div>
            )
        }

        return list
    }

    let selectItem = (page, item) => {
        console.log(page, item)
        if (page === 'food') {

        } else {
            if (!user[page])
                user[page] = {}
            user[page][item] = !user[page][item]
            setUser(user)
            console.log(user)
            forceUpdate()
        }
    }

    // renderPages(data)

    return (
        <div id={'pages'}>
            {renderPages()}
        </div>
    )
}