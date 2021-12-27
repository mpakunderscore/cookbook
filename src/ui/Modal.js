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

    let renderList = (itemList, active) => {

        let listLength = itemList.length

        // >= 6 ? 6 : itemList.length
        //itemList.length

        let list = []
        for (let i = 0; i < listLength; i++) {
            list.push(
                <div key={itemList[i].name}
                     className={(active ? 'active' : '')}
                     style={itemList[i].color ? {background: itemList[i].color} : {}}
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
        <div id={'modal'}>

            <div>

            <div className={'card active'}
                 style={{background: backgroundColor}}>
                <div className={'name'}>
                    {props.modal.group ? <span className={'count'}>{props.modal.group.toUpperCase()}</span> : ''}
                    {props.modal.name ? props.modal.name.toUpperCase() : 'BASKET'}
                </div>

                {/*<div className={'separator'}/>*/}

                <div className={'text'}>
                    {!props.modal.name ?
                        ''
                        :
                        'For this recipe we’ll be chopping up a few colorful veggies and tossing them with a zesty garlic dressing for a simple and delicious light salad.'
                    }
                </div>

                <div className={'list'}>
                    {!props.modal.name ?
                        renderList([{name: 'order'}, {name: 'clear'}, {name: 'close'}])
                        :
                        renderList([
                            {name: 'close'}, {name: '🏆'}, {name: ''},
                            {name: 'expert'}, {name: 'home cook'}, {name: 'amateur'},
                        ])
                    }
                    {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                    {/*<div>{item.list[1].name}</div>*/}
                    {/*<div>{item.list[2].name}</div>*/}
                </div>

            </div>

            <div className={'separator'}/>

            {/*highlight*/}

            <div className={'list'}>
                {renderList([
                    {name: 'cucumber', color: '#62bb69'},
                    {name: 'pepper', color: '#62bb69'},
                    {name: 'tomato', color: '#62bb69'},
                    {name: 'onion', color: '#62bb69'},
                    {name: 'garlic', color: '#62bb69'},
                    {name: 'lemon', color: '#FFD658'},
                    {name: 'mustard', color: ''},
                    {name: 'olive oil', color: ''},
                    {name: 'salt', color: '#4b4848'},
                    {name: 'black pepper', color: '#4b4848'},
                    // {name: '1', color: '#4b4848'},
                    // {name: '2', color: '#4b4848'},
                    // {name: '3', color: '#4b4848'},
                    // {name: '4', color: '#4b4848'},
                ], true)}
            </div>

            </div>

        </div>

    )
}