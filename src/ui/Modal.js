import React, {useEffect, useState, useRef} from 'react'

export default function Modal(props) {

    let [backgroundColor, setBackgroundColor] = useState('gray')

    useEffect(() => {
        console.log(props.modal.color)
        if (props.modal.color) {
            props.changeTheme(props.modal.color)
            setBackgroundColor(props.modal.color)
        } else {
            props.changeTheme(backgroundColor)
        }
    })

    let renderList = (itemList) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length
        //itemList.length

        let list = []
        for (let i = 0; i < listLength; i++) {
            list.push(
                <div key={itemList[i].name}
                     onClick={() => {
                         selectItem()
                     }}>
                    {itemList[i].name.toUpperCase()}
                </div>
            )
        }

        return list
    }

    let selectItem = () => {
        props.setModal(false)
    }

    return (
        <div id={'modal'} style={{background: backgroundColor}}>
            <div className={'card active'}
                 style={{background: backgroundColor}}>
                <div className={'name'}>
                    {props.modal.name ? props.modal.name.toUpperCase() : 'BASKET'}
                    {props.modal.group ? <span>{props.modal.group.toUpperCase()}</span> : ''}
                </div>

                <div className={'text'}>
                    {!props.modal.name ?
                        'Group the ingredients and find the missing ones'
                        :
                        'RECIPE'
                    }
                </div>

                <div className={'list'}>
                    {!props.modal.name ?
                        renderList([{name: 'order'}, {name: 'clear'}, {name: 'close'}])
                        :
                        renderList([{name: 'want'}, {name: 'did'}, {name: 'master'}])
                    }
                    {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                    {/*<div>{item.list[1].name}</div>*/}
                    {/*<div>{item.list[2].name}</div>*/}
                </div>

            </div>
        </div>

    )
}