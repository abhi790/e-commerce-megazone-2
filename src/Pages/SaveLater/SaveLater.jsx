import React, { useContext } from 'react'
import SaveLaterItem from '../../components/SaveLaterItem';
import stylesC from '../../components/CartItems.module.css';
import { cartContext } from '../../context/productContext';
const SaveLater = () => {
    const {wishList} = useContext(cartContext);
    const style = {
        fontSize:'3rem',
        color:'#555555',
        textAlign:'center',
        marginBottom:'2rem',
        textTransform:'uppercase'
    }
    

    const showList = () => {
        return (
        <div className={stylesC['savelater-container']}>
            {wishList.map(item => (
            <SaveLaterItem key={Math.random()} item={item}/>
            ))}
        </div>
        )
      }

    const nothingFound = () => {
        return (
            <span className={stylesC.nothing}>Empty Save for Later</span>
        )
    }
    return (
    <>
        <h1 style={style}>WishList ({wishList.length})</h1>
        {wishList.length !== 0 ? showList() : nothingFound()}
        
    </>
    
  )
}

export default SaveLater;