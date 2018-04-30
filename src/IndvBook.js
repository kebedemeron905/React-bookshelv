import React, {Component} from 'react'
import axios from 'axios'

class IndvBook extends Component {
  constructor (props) {
    super(props)
    this.state = {

      Indvbook: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:4004/')
      .then(response => {
        const Indvbook = response.data
        this.setState({ Indvbook })
      })
  }

  render () {
    return (
      <div>
        <h1>BookShelv</h1>
        <ul>

          <img src={this.state.Indvbook.url} alt='book img' />
          <li>{this.state.Indvbook.title}</li>
          <li>{this.state.Indvbook.author}</li>
          <li>{this.state.Indvbook.genera}</li>
          <li>{this.state.Indvbook.published}</li>
          <li>{this.state.Indvbook.reflection}</li>
          {/* <li>{this.state.books.comments.comment}</li> */}
        </ul>
      </div>

    )
  }
}

export default IndvBook
