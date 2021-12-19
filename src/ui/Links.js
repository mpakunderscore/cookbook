import React, {useEffect, useState, useRef} from 'react'
import api from "../api";
import eventBus from "../EventBus";

export default function Links(props) {

    let [state, setState] = useState('')

    let [firstActive, setFirstActive] = useState(false)

    let [scroll, setScroll] = useState(0)
    let [newCount, setNewCount] = useState(0)

    // let [domainsOnly, setDomainsOnly] = useState([])
    let [domainsNot, setDomainsNot] = useState([])

    let [langOnly, setLangOnly] = useState({})
    // let [langNot, setLangNot] = useState([])

    let [linksArray, setLinksArray] = useState([])

    let [wordsFilter, setWordsFilter] = useState([])

    const ref = useRef(null)

    useEffect(() => {

        loadGraph()

        eventBus.on('tag', (data) => {
                console.log(data.message);
                if (data.message === 'crawler' || data.message === 'domains') {
                    loadGraph(api[data.message])
                } else {
                    loadGraph(api[data.message + 'Links'])
                }
            }
        )

        eventBus.on('lang', (data) => {
                console.log(data.message);
                if (data.message === 'en') {
                    setLangOnly({en: true})
                } else {

                }
            }
        )

        eventBus.on('words', (data) => {
                console.log(data.message);
                setWords()
            }
        )

        window.onscroll = () => {
            setScroll(window.scrollY)
            // console.log(window.scrollY)
        }

    }, [])


    const prefix = '/api'

    let loadGraph = () => {
        fetch(prefix + '/food')
            .then(response => response.json())
            .then(data => {
                // updateLinks(data)
                // window.scrollTo(0, scroll)
                console.log(data)
            })
    }

    let renderGraph = () => {

    }

    return (
        <div id={'links'} className={'active'} onScroll={() => setScroll(0)}>
            {renderGraph()}
        </div>
    )
}