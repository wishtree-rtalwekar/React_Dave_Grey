import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items] = useState([
        {
            id: 1,
            checked: false,
            item: "ITEM1"
        },
        {
            id: 2,
            checked: false,
            item: "ITEM2"
        },
        {
            id: 3,
            checked: false,
            item: "ITEM3"
        }
    ]);


    return (
        <main>
            <ul type="none">
                {items.map((item) => {
                    return (
                        <li className='items' key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                            />
                            <label>{item.item}</label>
                            <FaTrashAlt
                                role="button"
                                tabIndex="0"
                            />
                        </li>)
                })}
            </ul>
        </main>
    )
}

export default Content