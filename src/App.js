import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom'
import Books from './Books.js'
import axios from 'axios'
import './App.css'

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
      <div>
        <h1> BookshelV</h1>
        <nav>

          { this.state.books.map(book => <img src={book.url} />) }
          {/* <Link to='/book'>BookshelV</Link> */}
        </nav>
        <main>

          {/* <Route path="" render={}/> */}
        </main>
      </div>
    )
  }
}

export default App
