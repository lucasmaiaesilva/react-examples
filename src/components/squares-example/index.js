import React, {Component} from 'react'
import Square from './square'
import './square.css'
import Button from './button'

class SquareExample extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Red',
      color: '#c0392b'
    }
  }
  render () {
    const arrColors = [
      {text: 'Red', color: '#c0392b'},
      {text: 'Green', color: '#16a085'},
      {text: 'Blue', color: '#2980b9'}
    ]
    return (
      <div>
        <h2> Squares Example </h2>
        <Square color={this.state.color} />
        {
          arrColors.map((item, index) => (
            <Button
              color={item.color}
              key={index}
              text={item.text}
              handleClick={(e) => (
                this.setState ({
                  text: item.text,
                  color: item.color
                })
              )}
            />
          ))
        }
      </div>
    )
  }
}

export default SquareExample
