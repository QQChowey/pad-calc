import React, { Component } from "react"
import Toolbar from "./toolbar/toolbar"

class Layout extends Component {
    construtor() {
        //super();
    }

    render() {
        return (
            <div style={
                    {
                        backgroundColor: "#353941",
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                    }
                }>
                <Toolbar />
                <main style={{marginTop: '63px'}}>
                    <p>Hello World!</p>
                </main>
            </div>


        )
    }

}

export default Layout
