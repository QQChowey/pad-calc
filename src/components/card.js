import React from "react"

function Card({id}) {
    const styleContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "2px",
    }

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
        <div style={styleContainer}>
            <img style={styleImage} src={url} alt={id}/>
        </div>

    )
}

export default Card
