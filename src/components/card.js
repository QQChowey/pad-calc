import React from "react"

function Card({id}) {
    let url
    (!id) ? url = "https://via.placeholder.com/100" : url = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + id + ".png"

    return (
        <img src={url} />
    )
}

export default Card
