import React, {Component} from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
    render() {
        return <div className="App">
            <div className="App-header">
                <h2>Welcome Introduction to <code>web-kata#1</code></h2>
            </div>
            <p className="App-intro">
                To get started change this text and save save to reload.
            </p>
            <div className='products'>
                <Products items={data}/>
            </div>
        </div>
    }
}

export default App;
