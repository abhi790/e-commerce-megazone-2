import React, { useContext } from 'react'
import stylesB from './Button.module.css';
import stylesC from './Card.module.css';
import { cartContext } from '../context/productContext';

const SaveLaterItem = ({item}) => {
    const {wishList, setWishList, cartItems, setCartItems,showToast} = useContext(cartContext);

    const handleDelete = () => {
        if(window.confirm(`Are you sure you want to delete item from wishlist`)){
            const remainingItems = wishList.filter(prod => prod.id !== item.id);
            setTimeout(() => {
              setWishList(remainingItems);
              showToast(`❌ ${item.name} -- deleted`,'red');
            }, 200);

        }
    }

    const handleMoveToCart = () => {
        setCartItems([...cartItems, item]);
        const remainingItems = wishList.filter(prod => prod.id !== item.id);
        setTimeout(() => {
          setWishList(remainingItems);
          showToast(`✅ ${item.name} -- moved to cart`,'green');
        }, 200);

    }

  return (
    <>
    <div className={stylesC.card}>
      <img src={item.img_src} />
        <div>
          <span className={stylesC.card_name}>{item.name}</span>
          <br />
          <span className={stylesC.card_s_des}>{item.short_desc}</span>
          <br />
          <span className={stylesC.card_l_des}>{item.long_desc}</span>
          <br />
          <span className={stylesC.curr_price}>Price : &#8377;{item.price} </span>
          <del className={stylesC.prev_price}>&#8377;1000</del>
        </div>
        <div className={stylesB["button-container"]}>
            <button className={`${stylesB.button} ${stylesB['remove-button']}`} onClick={handleDelete}>Delete</button>
            <button className={`${stylesB.button} ${stylesB['buy-button']}`} onClick={handleMoveToCart}>Move To Cart</button>
        </div>
    </div>
    </>
  )
}

export default SaveLaterItem;