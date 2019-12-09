import React, {Component} from 'react'
import Card from './components/card'

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
        <div>
            <Card />
            <Card id="1" />
        </div>
    </MyProvider>
  )
}

export default App
