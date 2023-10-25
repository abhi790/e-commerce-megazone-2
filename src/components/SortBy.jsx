import React from 'react'
import styles from './Sortby.module.css';
const SortBy = ({handleSortChange}) => {
  return (
    <div className={styles['sortby-container']}>
        <select className={styles['select-box']} id="sortby" onChange={handleSortChange}>
            <option className={styles['option-item']} value="id">Id</option>
            <option className={styles['option-item']} value="name">Name</option>
            <option className={styles['option-item']} value="name1">Name decending</option>
            <option className={styles['option-item']} value="price">Price</option>
            <option className={styles['option-item']} value="price1">Price decending</option>
        </select>
    </div>
  )
}

export default SortBy;