import React from 'react'

import './Searchbar.css'
const Searchbar = ({ value, onChange, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <div class="container">
        <h1 class="heading">Search your Beverage</h1>
        <div class="searchInputWrapper">
          <input onKeyDown={handleKeyDown} value={value} onChange={onChange} class="searchInput" type="text" placeholder=' search' />
          <i onClick={onClick} class="searchInputIcon fa fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default Searchbar