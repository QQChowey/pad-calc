import React from "react"
import Card from "./card"

const TeamTable = ({id}) => {
    const styleFlex = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    }

    const styleContainer = {
        maxWidth: "600px",
    }

    const styleInnerContainer = {
        //padding: "10px",
    }

    const styleCard = {
        margin: "2px",
    }

    return (
        <div style={styleContainer}>
            <div>
                <Card id={id[0]} />
            </div>
            <div style={styleInnerContainer}>
                <Card id={id[1]} />
                <Card id={id[2]} />
                <Card id={id[3]} />
                <Card id={id[4]} />
            </div>
            <div>
                <Card id={id[5]} />
            </div>
        </div>
    )
}

export default TeamTable
