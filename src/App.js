import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import Square from './components/squares-example'
// import HelloExample from './components/hello-example'
// import MarkdownEditor from './components/markdown-editor'
// import HelloExample from './components/hello-example'
// import MarkdownEditor from './components/markdown-editor'
import Search from './components/search'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <Search />
      </div>
    )
  }
}

export default App
