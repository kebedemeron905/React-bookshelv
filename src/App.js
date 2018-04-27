import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import axios from 'axios'
import './App.css'

import Books from './Books.js'
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
          <Link to='/addtoshelv' />

        </nav>
        <main>
          <button to='/addtoshelv'>Add to Shelv</button>
          <div className='imgcontainer'>
            { this.state.books.map(book => <img className='bookimgs'src={book.url} />) }
          </div>
          <Route
            path='/addtoshelv' render={() => (
              <Addtoshelv />
            )}
          />
        </main>
      </div>

    )
  }
}

export default App
