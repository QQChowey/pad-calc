import React, {Component} from 'react'
import Layout from './components/layout'

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
        <Layout />
    </MyProvider>
  )
}

export default App
