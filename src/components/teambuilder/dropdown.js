import React from 'react'
import styles from './dropdown.module.css'

const Dropdown = ({value}) => {

    const option = value.map((value) =>
        <option key={value} value={value}>{value}</option>
    )

    return (
        <select>
            {option}
        </select>
    )
}

export default Dropdown
