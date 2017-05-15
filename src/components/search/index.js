import React from 'react'
import SearchIcon from './search-icon'
import './style.css'

const Search = ({handleSubmit, handleChange}) => (
  <div className='search-block'>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='search' placeholder='Type your search here' />
      <button type='submit'><SearchIcon /></button>
    </form>
  </div>
)

export default Search
