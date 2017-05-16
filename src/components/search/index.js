import React from 'react'
import SearchIcon from './search-icon'
import PropTypes from 'prop-types'
import './style.css'

const Search = ({handleSubmit, handleChange}) => (
  <div className='search-block'>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='search' placeholder='Type your search here' />
      <button type='submit'><SearchIcon /></button>
    </form>
  </div>
)

Search.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default Search
