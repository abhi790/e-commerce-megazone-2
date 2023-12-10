import React, { useContext } from 'react'
import styles from './CartItems.module.css';
import stylesB from './Button.module.css';
import stylesC from './Card.module.css';
import { cartContext } from '../context/productContext';

const CartItems = ({item, cartItems, setCartItems}) => {
const { wishList, setWishList,showToast} = useContext(cartContext);
    const handleSaveForLater = () => {
        setWishList([...wishList, item]);
        const remainingItems = cartItems.filter(prod => prod.id !== item.id);
        setTimeout(()=> {
            setCartItems(remainingItems);
            showToast(`${item.name} -- saved to wishlist`, 'orange');
        }, 200);
    }


    const handleRemoveItem = () => {
        if(window.confirm(`Are you sure want to remove item from cart`)){
            const leftItems = cartItems.filter(prod => prod.id !== item.id);
            setTimeout(() => {
                setCartItems(leftItems);
                showToast(`❌ ${item.name} -- removed from cart`, 'red')
            }, 200);
        }

    }
    const handleBuyItem = () => {
        if(window.confirm(`Are you sure you want buy the item`)){
            const leftItems = cartItems.filter(prod => prod.id !== item.id);
            setTimeout(() => {
                setCartItems(leftItems);
                showToast(`${item.name} --  purchased succesfully`,'green');
            }, 200);
        }
    }

    return (
    < >
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
            <button className={`${stylesB.button} ${stylesB['remove-button']}`} onClick={handleRemoveItem}>Remove Item</button>
            <button className={`${stylesB.button} ${stylesB['savelater-button']}`} onClick={handleSaveForLater}>Save for Later</button>
            <button className={`${stylesB.button} ${stylesB['buy-button']}`} onClick={handleBuyItem}>Buy Now</button>

        </div>
    </div>
    </>
  )
}

export default CartItems;