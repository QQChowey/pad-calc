import React from "react"

function Card(props) {
    let url
    (!props.id) ? url = "https://via.placeholder.com/100" : url = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + props.id + ".png"

    return (
        <img src={url} />
    )
}

export default Card
