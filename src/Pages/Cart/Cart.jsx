import React, { useContext, useEffect,useState } from 'react'
import {cartContext } from '../../context/productContext';
import CartItems from '../../components/CartItems';
import styles from '../../components/CartItems.module.css';
import stylesC from './Cart.module.css';
import SaveLater from '../SaveLater/SaveLater';
import SortBy from '../../components/SortBy';
const Cart = () => {
  const [sortby, setSortby] = useState('id');
  const {cartItems, wishList, setCartItems, sortList} = useContext(cartContext);
  
  useEffect(() => {
    const _sortedList = sortList(cartItems,sortby);
    setCartItems(_sortedList);
  } , []);

  const styleC = {
    fontSize:'3rem',
    color:'#555555',
    textAlign:'center',
    marginBottom:'2rem',
    textTransform:'uppercase'
  }

  const showList = () => {
    return (
      <div className={stylesC['cart-container']}>
        {cartItems.map(item => (
          <CartItems key={Math.random()} item={item} cartItems={cartItems} setCartItems={setCartItems}/>
          ))}
    </div>
    )
  }

const nothingFound = () => {
    return (
        <span className={styles.nothing}>Empty Save for Later</span>
    )
}

  const handleSortChange = (e) => {
    setSortby(e.target.value);
    setCartItems(sortList(cartItems,e.target.value));
  }

  return (
    < >
      <h1 style={styleC}>Cart ({cartItems.length})</h1>
      <span className={stylesC['foundItem']}>Found {cartItems.length} items in list</span>
      
      {/* sortby functionality */}
      <SortBy handleSortChange={handleSortChange}/>

      {cartItems.length != 0 ? showList() : nothingFound()}
          <hr className={stylesC["hr-line"]}/>
      <SaveLater />
    </>
  )
}

export default Cart;