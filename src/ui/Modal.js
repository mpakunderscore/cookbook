import React, {useEffect, useState, useRef} from 'react'

export default function Modal(props) {

    useEffect(() => {

    })

    let renderList = (itemList, name) => {

        let listLength = itemList.length >= 6 ? 6 : itemList.length
        //itemList.length

        let list = []
        for (let i = 0; i < listLength; i++) {
            list.push(
                <div key={itemList[i].name}
                     onClick={() => {
                         selectItem(name, itemList[i].name)
                     }}>
                    {itemList[i].name.toUpperCase()}
                </div>
            )
        }

        return list
    }

    let selectItem = (page, item) => {
        props.setModal(false)
    }

    return (
        <div id={'modal'}>
            <div className={'card active'}
                 style={{background: 'gray'}}>
                <div className={'name'}>BASKET</div>
                <div className={'title'}>Group the ingredients and find the missing ones</div>

                <div className={'list'}>
                    {renderList([{name: 'close'}, {name: 'clear'}, {name: 'order'}], 'basket')}
                    {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                    {/*<div>{item.list[1].name}</div>*/}
                    {/*<div>{item.list[2].name}</div>*/}
                </div>

            </div>
        </div>

    )
}