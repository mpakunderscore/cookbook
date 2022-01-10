import React, {useEffect, useState, useRef} from 'react'
import recipes from "../../recipes";
import {loadImages} from "../api";

export default function Modal(props) {

    // console.log(props.images)

    let [backgroundColor, setBackgroundColor] = useState('gray')

    // let [imageID, setImageID] = useState('')

    let [urls, setUrls] = useState([])

    let [amateur, setAmateur] = useState(props.modal.state)

    useEffect(() => {

        console.log(props.modal.color)
        if (props.modal.color) {
            props.changeTheme(props.modal.color)
            setBackgroundColor(props.modal.color)
        } else {
            props.changeTheme(backgroundColor)
        }

    }, [])

    let renderList = (itemList, active) => {

        // console.log(itemList)

        let listLength = itemList.length

        // >= 6 ? 6 : itemList.length
        //itemList.length

        let list = []
        for (let i = 0; i < listLength; i++) {
            list.push(
                <div key={itemList[i].name + i}
                     className={
                         (itemList[i].disabled ? 'disabled ' : '') +
                         (active || itemList[i].active || (amateur && itemList[i].name === 'amateur') ? 'active' : '')}
                     style={itemList[i].color ? {
                         background: itemList[i].color,
                         color: itemList[i].highlight ? '#4c4c4c' : 'white'
                     } : {}}
                     onClick={() => {

                         if (itemList[i].name === 'i did it') {
                             props.modal.accept()
                             setAmateur(true)
                             props.setModal(false)
                         } else if (!itemList[i].disabled) {
                            props.setHelp(0)
                         } else {
                             selectItem()
                         }

                     }}>
                    {itemList[i].name.toUpperCase()}
                </div>
            )
        }

        return list
    }

    let selectItem = () => {
        // props.setModal(false)
    }

    let generateImages = () => {

        let group = props.images[props.modal.group]
        // console.log(group)

        let localImages = group ? group[props.modal.name] : []
        // console.log(localImages)

        let images = []
        for (let i = 0; i < localImages.length; i++) {
            images.push(<img height={180
            } key={'image' + i} src={localImages[i]}/>)
        }

        return images
    }

    return (
        <div id={'modal'}>

            <div>

                <div className={'card active ' + (props.modal.highlight ? 'highlight' : '')} style={{background: backgroundColor}}>

                    <div className={'name'}>
                        <div>{props.modal.group.toUpperCase()}</div>
                        <div>{props.modal.name.toUpperCase()}</div>
                        <div className={'close'} onClick={() => props.setModal(false)}>✖</div>
                    </div>

                    <div id={'images'}>
                        <div>
                            {generateImages()}
                        </div>
                    </div>

                    {/*<div className={'separator'}/>*/}

                    <div className={'text'}>
                        {recipes[props.modal.group] && recipes[props.modal.group][props.modal.name] && recipes[props.modal.group][props.modal.name].text && recipes[props.modal.group][props.modal.name].text.length > 0 ?

                            recipes[props.modal.group][props.modal.name].text.replaceAll('\n', '\n\n')
                            :
                            'NO RECIPE HERE'
                        }
                    </div>

                    {props.help === 0 ? <div onClick={() => props.setHelp(1)} className={'help'}>{'You can mark a recipe as unlocked if you\'ve done it in the past. But to get a mastered you have to do it two more times and attach a photo. Only then you will be able to claim the competition.'}</div> : ''}

                    <div className={'list'}>
                        {!props.modal.name ?
                            renderList([{name: 'order'}, {name: 'clear'}, {name: 'close'}])
                            :
                            renderList([
                                {name: 'mastered'}, {name: 'i did it', active: amateur},
                            ])

                            // {name: '🏆', disabled: true},
                        }
                        {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                        {/*<div>{item.list[1].name}</div>*/}
                        {/*<div>{item.list[2].name}</div>*/}
                    </div>

                </div>

                {/*highlight*/}

                <div className={''} style={{background: backgroundColor.replace(')', ', 0.3)').replace('rgb', 'rgba')}}>
                    <div className={'separator'}/>
                    <div className={'list'}>
                        {recipes[props.modal.group] && recipes[props.modal.group][props.modal.name] && recipes[props.modal.group][props.modal.name].list ?
                            renderList(recipes[props.modal.group][props.modal.name].list)
                            :
                            ''
                        }
                    </div>
                </div>

            </div>
        </div>

    )
}