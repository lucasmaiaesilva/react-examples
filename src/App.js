import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import Square from './components/squares-example'
<<<<<<< HEAD
// import HelloExample from './components/hello-example'
import MarkdownEditor from './components/markdown-editor'
=======
import HelloExample from './components/hello-example'
<<<<<<< HEAD
=======
// import MarkdownEditor from './components/markdown-editor'
>>>>>>> 1a87adea25892354bb5d0ca1fd57ab1e19eea6c4
>>>>>>> bc791ad40f9ff0befa2884b2fffce386beee6d0e

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <MarkdownEditor />
      </div>
    )
  }
}

export default App
