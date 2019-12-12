import React from "react"
import './toolbar.css'
import ToggleButton from '../sidenav/toggleButton'

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <ToggleButton />
            </div>
            <div className="toolbar__logo">
                Valeria
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <a href="/">
                            <i className="material-icons">help_outline</i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="material-icons">settings</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar
