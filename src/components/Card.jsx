import React, { useContext } from 'react'
import styles from './Card.module.css';
import stylesB from './Button.module.css';
import { Link } from 'react-router-dom';
import { productContext } from '../context/productContext';

const Card = ({product}) => {
  const {cartItems, setCartItems,isProductPresent, showAddToCart, showGoToCart,showToast} = useContext(productContext);
  const handleAddToCart = (id) => {
    setTimeout(()=>{
      setCartItems([...cartItems, product]);
      showToast(`✅ ${product.name} -- added successfully`,'green');
    }, 200);
  }


  return (
    <div className={styles.card}>
      <img src={product.img_src} />
        <div className={styles.content}>
          <span className={styles.card_name}>{product.name}</span>
          <br />
          <span className={styles.card_s_des}>{product.short_desc}</span>
          <br />
          <span className={styles.card_l_des}>{product.long_desc}</span>
          <br />
          <span className={styles.curr_price}>Price : &#8377;{product.price} </span>
          <del className={styles.prev_price}>&#8377;1000</del>
        </div>

        <div className={styles["button-container"]}>
          <Link to={`/details/${product.id}`}>
            <button className={styles.button}>View Item</button>
          </Link>

        {
            isProductPresent(product) ? showGoToCart() : <button className={`${stylesB.button}`} onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
        }
        </div>
    </div>
  )
}

export default Card;