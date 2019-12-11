import React from "react"

function Card({id}) {

    const styleImage = {
        width: "100%",
        //display: "block",
        opacity: "1.0",
    }

    let url
    if (!id) {
        url = "https://via.placeholder.com/100"
        styleImage.opacity = "0.0"
    } else {
        url = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + id + ".png"
        styleImage.opacity = "1.0"
    }

    return (
        <img style={styleImage} src={url} alt={id}/>
    )
}

export default Card
