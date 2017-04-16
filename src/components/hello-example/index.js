import React, {Component} from 'react'
import Message from './message'
import Input from './input'
import './style.css'

class HelloExample extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Desconhecido'
    }
  }
  render () {
    return (
      <div className='header-name'>
        <Input
          handleChange={(e) => (
            this.setState({
              name: e.target.value
            })
          )}
        />
        <Message name={this.state.name} />
      </div>
    )
  }
}

export default HelloExample
