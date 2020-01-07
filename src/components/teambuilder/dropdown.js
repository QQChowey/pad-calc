import React from 'react'
import styles from './dropdown.module.css'

const Dropdown = ({value, selected, changeHandler}) => {

    const option = value.map((value) =>
        <option key={value} value={value}>{value}</option>
    )

    return (
        <select value={selected} onChange={changeHandler}>
            {option}
        </select>
    )
}

export default Dropdown
