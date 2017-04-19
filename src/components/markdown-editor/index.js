import React, {Component} from 'react'
import TextArea from './textarea'
import Display from './display'

class MarkdownEditor extends Component {
  render () {
    return (
      <div>
        <h2>Markdown Editor</h2>
        <TextArea />
        <Display />
      </div>
    )
  }
}

export default MarkdownEditor
