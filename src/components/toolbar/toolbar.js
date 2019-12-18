import React from "react"
import './toolbar.css'
import ToggleButton from '../sidenav/toggleButton'

const Toolbar = ({sideToggleClickHandler}) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <ToggleButton click={sideToggleClickHandler}/>
            </div>
            <div className="toolbar__logo">
                Valeria
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <div onClick={() => console.log("Help")}>
                            <i className="material-icons">help_outline</i>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => console.log("Settings")}>
                            <i className="material-icons">settings</i>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar
