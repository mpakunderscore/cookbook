import React, {useEffect, useState, useRef} from 'react'
import recipes from "../../recipes";

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
                     className={(active || itemList[i].active ? 'active' : '')}
                     style={itemList[i].color ? {background: itemList[i].color, color: itemList[i].highlight ? '#4c4c4c' : 'white'} : {}}
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
        // props.setModal(false)
    }

    return (
        <div id={'modal'}>

            <div>

                <div className={'card active'} style={{background: backgroundColor}}>

                    <div className={'name'}>
                        <div>{props.modal.group.toUpperCase()}</div>
                        <div>{props.modal.name.toUpperCase()}</div>
                        <div className={'close'} onClick={() => props.setModal(false)}>✖</div>
                    </div>

                    {/*<div className={'separator'}/>*/}

                    <div className={'text'}>
                        {recipes[props.modal.group] && recipes[props.modal.group][props.modal.name] && recipes[props.modal.group][props.modal.name].text && recipes[props.modal.group][props.modal.name].text.length > 0 ?
                            recipes[props.modal.group][props.modal.name].text
                            :
                            'NO RECIPE HERE'}
                    </div>

                    <div className={'list'}>
                        {!props.modal.name ?
                            renderList([{name: 'order'}, {name: 'clear'}, {name: 'close'}])
                            :
                            renderList([
                                {name: '🏆'}, {name: 'expert'}, {name: 'amateur'},
                            ])
                        }
                        {/*{item.list.length > 0 & <div>{item.list[0].name}</div>}*/}
                        {/*<div>{item.list[1].name}</div>*/}
                        {/*<div>{item.list[2].name}</div>*/}
                    </div>

                </div>

                <div className={'separator'}/>

                {/*highlight*/}

                <div className={''}>
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