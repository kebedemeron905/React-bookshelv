import React, {Component} from 'react'
import axios from 'axios'

class Addtoshelv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      genera: '',
      published: '',
      reflection: '',
      url: ''

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios.post('http://localhost:4004/')
      .then(response => {
        const books = response.data
        this.setState({ books })
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Title:
          <input
            name={this.state.title}
            type='text'
            onChange={this.handleInputChange} />
        </label>

        <label>
        Author:
          <input
            name={this.state.author}
            type='text'
            onChange={this.handleInputChange} />
        </label>

        <label>
        Genera:
          <input
            name={this.state.genera}
            type='text'
            onChange={this.handleInputChange} />
        </label>

        <label>
        Published:
          <input
            name={this.state.published}
            type='text'
            onChange={this.handleInputChange} />
        </label>

        <label>
        Reflection:
          <input
            name={this.state.reflection}
            type='text'
            onChange={this.handleInputChange} />
        </label>

        <label>
        url:
          <input
            name={this.state.url}
            type='text'
            onChange={this.handleInputChange} />
        </label>
        <input type='submit' value='Add Book' className='addbook' />
      </form>

    )
  }
}

export default Addtoshelv
