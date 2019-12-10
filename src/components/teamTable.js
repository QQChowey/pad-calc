import React from "react"
import Card from "./card"

function TeamTable({id}) {
    const styleContainer = {
        // backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "600px",
    }

    const styleInnerContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        //padding: "10px",
    }

    return (
        <div style={styleContainer}>
            <Card id={id[0]} />
            <div style={styleInnerContainer}>
                <Card id={id[1]} />
                <Card id={id[2]} />
                <Card id={id[3]} />
                <Card id={id[4]} />
            </div>
            <Card id={id[5]} />
        </div>
    )
}

export default TeamTable
