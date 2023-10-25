import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.module.css'
import stylesNav from './Navigation.module.css';
const Navigation = ({cartItems}) => {
  return (
    <div className={stylesNav.nav}>
      <Link to={`/`}>
          <button className={`${styles['button']} ${stylesNav['nav-button']}`}>Product List</button>
      </Link>
      <div className={stylesNav.cart}>
        <Link to={`/cart`}>
            <button  className={`${styles['button']} ${stylesNav['nav-button']}`}>Cart</button>
        </Link>
        <span className={stylesNav.indicator}>{cartItems.length}</span>
      </div>

    </div>
  )
}

export default Navigation;