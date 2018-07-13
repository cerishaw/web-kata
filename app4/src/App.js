import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import data from './data.js'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: data.products }
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 4- Add router to an app</h2>
      </div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
          <Route path="/products" component={ProductContainer}/>
      </div>
    </div>
  }
}

class Router extends Component {
  render() {
      return <BrowserRouter>
          <App/>
      </BrowserRouter>
  }
}

export default Router
