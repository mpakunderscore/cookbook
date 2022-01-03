import React, {useEffect, useState, useRef} from 'react'
import recipes from "../../recipes";

export default function Fridge(props) {

    let [backgroundColor, setBackgroundColor] = useState('#2d2d2d')

    let [amateur, setAmateur] = useState(props.modal.state)

    let [light, setLight] = useState(true)

    useEffect(() => {
        // console.log(props.modal.color)
        if (props.modal.color) {
            props.changeTheme(props.modal.color)
            setBackgroundColor(props.modal.color)
        } else {
            props.changeTheme(backgroundColor)
        }
    })

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
                         (active ||
                         itemList[i].active ||
                         (amateur && itemList[i].name === 'amateur') ||
                         (itemList[i].name === '💡' && light) ?
                             'active' : '')
                     }
                     style={{
                         background: itemList[i].color,
                         color: itemList[i].highlight ? '#4c4c4c' : 'white',
                         ...(itemList[i].name === '💡' ? {fontSize: '26px'} : {})}}
                     onClick={() => {

                         selectItem()

                         if (itemList[i].name === '💡') {
                             setLight(!light)
                             // props.changeTheme(!light ? item.color : item.color2)
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

    return (
        <div id={'modal'}>

            <div id={'fridge'}>

                <div className={'card active'} style={{background: backgroundColor}}>

                    <div className={'name'}>
                        <div>{props.modal.group.toUpperCase()}</div>
                        <div>{props.modal.name.toUpperCase()}</div>
                        <div className={'close'} onClick={() => props.setModal(false)}>✖</div>
                    </div>

                    {/*<div className={'separator'}/>*/}

                    <div className={'text'}>
                        {'COLD HERE'}
                    </div>

                    <div className={'list'}>
                        {renderList([{name: 'shopping list'}, {name: 'generate recipe'}, {name: '💡'}])}
                    </div>

                </div>

                {/*highlight*/}

                <div className={''} style={{backgroundColor: light ? '#D1D1D1' : '#424240'}}>
                    <div className={'separator'}/>
                    <div className={'list'}>
                        {renderList(props.modal.list)}
                    </div>
                </div>


            </div>


        </div>

    )
}