import React from 'react'
import styles from './dropdown.module.css'

const Dropdown = ({value, selected}) => {

    const option = value.map((value) =>
        <option key={value} value={value}>{value}</option>
    )

    return (
        <select value={selected} onChange={this.changeHandler}>
            {option}
        </select>
    )
}

export default Dropdown
