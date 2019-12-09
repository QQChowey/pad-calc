import React, {Component} from 'react'

const MyContext = React.createContext()

class MyProvider extends Component {
    state = {
        text: "Hello World!"
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
            <MyContext.Consumer>
                {(context) => (context.state.text)}
            </MyContext.Consumer>
        </div>
    </MyProvider>

  )
}

export default App
