import ProductListing from "./Pages/ProductListing/ProductListing";
import Navigation from "./components/Navigation";
import { useContext, useState } from "react";
import {productContext, cartContext} from './context/productContext';
import { products } from "./Data/products";
import {  Routes, Route, Link } from "react-router-dom";
import Cart from './Pages/Cart/Cart';
import styles from './components/Button.module.css';
import HomePage from "./components/HomePage";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const isProductPresent = (product) => {
    return cartItems.find(item => item.id == product.id) ? true : false;
  }

  const showGoToCart = () => {
    return (
      <Link to={`/e-commerce-megazone-2/cart`}>
        <button className={`${styles.button} ${styles['goToCart']}`}>Go to Cart</button>
      </Link>
    )
  }

  const showAddToCart = (id) => {
    // console.log(`showAddToCart triggered for id : ${id}`);
    return (
      <button className={`${styles.button}`} onClick={() => handleAddToCart(id)}>Add To Cart</button>
    )
  }

  const handleAddToCart = (id) => {
    const product = products.find(item => item.id == id);
    const presentInCart = cartItems.find(item => item.id == id);
    if(product.id != presentInCart.id){
      setCartItems([...cartItems, product]);
    }
  }

  const dynamicSort = (property, order='asc') => {
    let sort_order = 1;
    if(order === 'desc'){
        sort_order = -1;
    }

    return (a,b) => {
        if(a[property] < b[property]) return -1 * sort_order;
        else if(a[property] > b[property]) return 1 * sort_order;
        else return 0;
    }
}
  const sortList = (_filteredProduct, property) => {
      if(property.includes(1)){
          property = property.slice(0,  property.length - 1);
          return _filteredProduct.sort(dynamicSort(property, 'desc'));
      }

      return _filteredProduct.sort(dynamicSort(property));
  }
  const showToast = (message,color,duration) => {
    const toastBox = document.getElementById('toastBox');
   
    let toast = document.createElement('div');
    // console.log(`${message} is clicked`);

    toast.classList.add('toast');
    switch(color){
      case 'green' : toast.classList.add('greenBox');
        break;
      case 'red' : toast.classList.add('redBox');
        break;
      default : toast.classList.add('orangeBox');
        break;
    }
    toast.innerHTML = `${message}`;
    toastBox.classList.add('toastContainer');
    toastBox.appendChild(toast);
    setTimeout(()=> {
      toast.remove();
    }, duration ? duration : 3000);
    console.log(`ToastBox`, toastBox);
  }

  return (
    <>
      <div id="toastBox" ></div>
      <Navigation cartItems={cartItems}/>
      {/* To show toast message to user*/}
      <Routes>
        <Route path="/e-commerce-megazone-2/" element={<HomePage />} />
        <Route path="/e-commerce-megazone-2/products-page" element={
          <productContext.Provider value={{products, cartItems,setCartItems, isProductPresent, showAddToCart,showGoToCart,sortList, dynamicSort, showToast}}>
            <ProductListing />
          </productContext.Provider>
        } />
        <Route path="/e-commerce-megazone-2/cart" element={
          <cartContext.Provider value={{cartItems, setCartItems,wishList, setWishList, sortList, showToast}}>
            <Cart />
          </cartContext.Provider>
        
        }/>

      </Routes>
      
    </>
  );
}

export default App;
