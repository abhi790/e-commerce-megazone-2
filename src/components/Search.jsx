import React from 'react'
import styles from './Search.module.css';
const Search = ({search,handleOnChange}) => {
  return (
    <div className={styles['search-container']}>
        
        <input className={styles['input-box']} type="text" placeholder='Search' id='search' value={search} onChange={handleOnChange}/>
    </div>
  )
}

export default Search;