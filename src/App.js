import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import axios from 'axios'
import './App.css'

import IndvBook from './IndvBook.js'
import Addtoshelv from './Addtoshelv'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

      books: []

    }
  }

  componentDidMount () {
    axios.get('http://localhost:4004/')
      .then(response => {
        const books = response.data
        this.setState({ books })
      })
  }

  render () {
    return (
      <div className='bookcontainer'>
        <h1 className='h1'> BookshelV</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/addtoshelv'>Addtoshelv</Link>

        </nav>
        <main>
          {/* <button to='/addtoshelv'>Add to Shelv</button> */}
          <Addtoshelv />
          {/* <IndvBook /> */}
          <div className='imgcontainer'>
            { this.state.books.map(book => book.url && <img className='bookimgs' src={book.url} />) }
          </div>

          <Switch>
            <Route
              exact path='/addtoshelv' render={(props) => (
                <Addtoshelv onChange={this.handleInputChange} />
              )}
            />

          </Switch>
        </main>

      </div>

    )
  }
}

export default App
