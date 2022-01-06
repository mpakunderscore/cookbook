import React, {useEffect, useState, useRef} from 'react'
import recipes from "../../recipes";
import eventBus from "../EventBus";

export default function Unlocked(props) {

    // const [, updateState] = React.useState()
    // const forceUpdate = React.useCallback(() => updateState({}), [])
    //
    // let [backgroundColor, setBackgroundColor] = useState('#2d2d2d')
    //
    // // let [amateur, setAmateur] = useState(props.modal.state)
    //
    // let [items, setItems] = useState(props.modal.list)
    //
    // let [shop, setShop] = useState(false)
    //
    // let [recipe, setRecipe] = useState(false)
    //
    // let [light, setLight] = useState(true)

    useEffect(() => {

        // // console.log(props.modal.color)
        // if (props.modal.color) {
        //     props.changeTheme(props.modal.color)
        //     setBackgroundColor(props.modal.color)
        // } else {
        //     props.changeTheme(backgroundColor)
        // }
        //
        // let localItems = []
        // for (let i = 0; i < props.modal.list.length; i++) {
        //     let item = props.modal.list[i]
        //     item.i = i
        //     localItems.push(item)
        // }
        // setItems(localItems)

        navigator.vibrate(100)

    }, [])

    // let renderList = (itemList) => {
    //
    //     // console.log(itemList)
    //
    //     let listLength = itemList.length
    //
    //     // >= 6 ? 6 : itemList.length
    //     //itemList.length
    //
    //     let list = []
    //     for (let i = 0; i < listLength; i++) {
    //         list.push(
    //             <div key={itemList[i].name + i}
    //                  className={
    //                      (itemList[i].active ||
    //                      (itemList[i].name === 'shopping list' && shop) ||
    //                      (itemList[i].name === '💡' && light) ?
    //                          'active' : '')
    //                  }
    //                  style={{
    //                      background: itemList[i].color,
    //                      color: itemList[i].highlight ? '#4c4c4c' : 'white',
    //                      ...(itemList[i].name === '💡' ? {fontSize: '26px'} : {})}}
    //                  onClick={() => {
    //
    //                      itemList[i].call ?
    //                          itemList[i].call()
    //                          :
    //                          selectItem(itemList[i].i)
    //
    //                      forceUpdate()
    //
    //                  }}>
    //                 {/*{!light ? '🧅' : itemList[i].name.toUpperCase()}*/}
    //                 {itemList[i].name.toUpperCase()}
    //                 {/*{!hide ? itemList[i].name.toUpperCase() : ''}*/}
    //             </div>
    //         )
    //     }
    //
    //     return list
    // }
    //
    // let selectItem = (i) => {
    //     items[i].active = !items[i].active
    //     setItems(items)
    //     forceUpdate()
    //     // console.log(items)
    // }

    return (
        <div id={'modal'}>

            <div id={'unlocked'}>

                <div className={'card highlight'} style={{background: props.unlocked.color}}>

                    <div className={'name'}>
                        <div>{'unlocked'}</div>
                        <div>{props.unlocked.name.toUpperCase()}</div>
                        <div className={'close'} onClick={() => {
                            props.setUnlocked(false)
                            // props.modal.cancel()
                            // props.setModal(false)
                        }}>✖</div>
                    </div>

                    {/*<div className={'separator'}/>*/}

                    {/*<div className={'text'}>*/}
                    {/*    {'Pick up shopping list or generate recipe based on several groceries.'}*/}
                    {/*</div>*/}

                    <div className={'text'}>{}</div>

                    <div className={'cup'}>{props.unlocked.emoji ? props.unlocked.emoji : '🏆'}</div>

                    {/*<div className={'list'}>*/}
                    {/*    {renderList([{name: 'shopping list', call: () => setShop(!shop)}, {name: 'generate recipe', call: () => setRecipe(!recipe)}, {name: '💡', call: () => setLight(!light)}])}*/}
                    {/*</div>*/}

                </div>

            </div>


        </div>

    )
}