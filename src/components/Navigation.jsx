import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.module.css'
import stylesNav from './Navigation.module.css';
const Navigation = ({cartItems}) => {
  return (
    <div className={stylesNav.nav}>
      <Link to={`/e-commerce-megazone-2/`}>
          <button className={`${styles['button']} ${stylesNav['nav-button']}`}>HomePage</button>
      </Link>
      <Link to={`/e-commerce-megazone-2/products-page`}>
          <button className={`${styles['button']} ${stylesNav['nav-button']}`}>Product List</button>
      </Link>
      <div className={stylesNav.cart}>
        <Link to={`/e-commerce-megazone-2/cart`}>
            <button  className={`${styles['button']} ${stylesNav['nav-button']}`}>Cart</button>
        </Link>
        <span className={stylesNav.indicator}>{cartItems.length}</span>
      </div>

    </div>
  )
}

export default Navigation;