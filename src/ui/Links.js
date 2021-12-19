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

    let clickWord = (word) => {
        let index = wordsFilter.indexOf(word)
        if (index === -1) {
            wordsFilter.push(word)
        } else {
            wordsFilter = []
        }

        // loadData()
        setWordsFilter(wordsFilter)
    }

    let loadData = () => {

        let tag = localStorage.getItem('tag')
        // console.log(tag)
        if (tag) {
            if (tag === 'crawler' || tag === 'domains') {
                loadLinks(api[tag])
            } else {
                loadLinks(api[tag + 'Links'])
            }
        } else {
            loadLinks(api.hotLinks)
        }
    }

    useEffect(() => {

        loadData()

        eventBus.on('tag', (data) => {
                console.log(data.message);
                if (data.message === 'crawler' || data.message === 'domains') {
                    loadLinks(api[data.message])
                } else {
                    loadLinks(api[data.message + 'Links'])
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

        // let interval = setInterval(() => {
        //     loadData()
        //     console.log('Update')
        // }, 1 * 1000)
        //
        // //destroy interval on unmount
        // return () => clearInterval(interval)

    }, [])

    // useInterval(() => {
    //     loadData()
    //     // console.log('Update data')
    // }, 5000);

    const prefix = '/api'

    let setWords = () => {
        fetch(prefix + api.words)
            .then(response => response.json())
            .then(data => {
                setLinksArray([{title: 'WORDS', url: '', words: data}])
                // window.scrollTo(0, scroll)
            })
    }

    let loadLinks = (route = api.newLinks) => {
        fetch(prefix + route + wordsFilter.join(','))
            .then(response => response.json())
            .then(data => {
                updateLinks(data)
                // window.scrollTo(0, scroll)
            })
    }

    let updateLinks = (data) => {
        // console.log(data.indexOf(linksArray[0]))
        // console.log(data)
        // console.log(linksArray[0])
        // console.log(data[0])
        if (linksArray[0]) {
            let index = data.findIndex(link => link.id === linksArray[0].id)
            if (index === 0) {
                // console.log(index)
                // setFirstActive(true)
            } else if (index === -1) {

            } else {

                setScroll(index * 118 + scroll)
                setFirstActive(false)
            }

            // console.log(index)
        }

        setLinksArray(data)
    }

    let renderLinks = () => {

        let links = linksArray

        let linksDivArray = []

        // console.log(links.length)
        // console.log(domainsNot)

        for (let i = 0; i < links.length; i++) {

            let words = links[i].words ?
                Array.isArray(links[i].words) ? links[i].words.map(word => word ? word.id : '') : links[i].words.split(', ')
                : []

            let filter = false
            for (let j = 0; j < wordsFilter.length; j++) {
                if (words.indexOf(wordsFilter[j]) < 0)
                    filter = true
            }

            if (filter)
                continue

            let lang = words[words.length - 1]
            if (Object.keys(langOnly).length > 0 && !langOnly[lang]) {
                continue
            }

            words.push(links[i].length + '')

            let urlString = links[i].url.replace('https://', '').replace('http://', '').replace('www.', '')
            let domain = urlString.split('/')[0]
            if (domainsNot.length !== 0 && domainsNot.includes(domain)) {
                continue
            }

            linksDivArray.push(<div className={'link' + (i === 0 && firstActive ? ' first' : '')} key={'link' + i}>
                <div className={'head'}>
                    <a className={'title'} target={'_blank'} title={urlString}
                       href={links[i].url}>{links[i].title && links[i].title.length > 0 ? links[i].title : links[i].url}</a>
                    {/*<div className={'length'} title={links[i].id}>{links[i].length}</div>*/}
                </div>
                <div className={'words'}>
                    {renderWords(domain, words)}
                </div>
            </div>)
        }

        return linksDivArray
    }

    let renderWords = (domain, words) => {

        let wordsDiv = []

        wordsDiv.push(<div key={domain} className={'domain'} onClick={() => {
            domainsNot.push(domain)
            console.log(domainsNot)
            setDomainsNot(domainsNot)
            setState(domain)
        }}>{domain}</div>)

        for (let i = 0; i < words.length; i++) {
            // console.log(wordsFilter.indexOf(words[i]))

            // TODO BUG HERE EMPTY WORDS
            if (words[i].length > 0) {
                wordsDiv.push(<div key={'word' + i} className={'word' + (wordsFilter.indexOf(words[i]) > -1 ? ' selected' : '')} onClick={() => {
                    clickWord(words[i])
                    // console.log(wordsFilter)
                    setState(words[i])
                }}>{words[i]}</div>)
            }
        }

        return wordsDiv
    }

    return (
        <div id={'links'} className={'active'} onScroll={() => setScroll(0)}>
            {renderLinks()}
        </div>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}