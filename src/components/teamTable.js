import React from "react"
import Card from "./card"

function TeamTable({id}) {
    return (
        <div>
            <Card id={id[0]} />
            <Card id={id[1]} />
            <Card id={id[2]} />
            <Card id={id[3]} />
            <Card id={id[4]} />
            <Card id={id[5]} />
        </div>
    )
}

export default TeamTable
