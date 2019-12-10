import React, {Component} from 'react'
import TeamTable from './components/teamTable'

const MyContext = React.createContext()
class MyProvider extends Component {
    state = {

    }
    render() {
        return (
            <MyContext.Provider value={{state: this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

function App() {
  return (
    <MyProvider>
        <React.Fragment>
            <div>
                <TeamTable id={["0", "0", "0", "0", "0", "0"]}/>
            </div>

        </React.Fragment>
    </MyProvider>
  )
}

export default App
