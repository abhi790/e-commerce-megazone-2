import React, { useContext, useState, useEffect } from 'react'
import '../../index.css';
import Hero from './Hero';
import { productContext } from '../../context/productContext';
import Card from '../../components/Card';
import styles from './ProductListing.module.css';
import stylesC from '../Cart/Cart.module.css';
import Search from '../../components/Search';
import SortBy from '../../components/SortBy';
const ProductListing = () => {
    const {products,sortList} = useContext(productContext);
    const [query, setQuery] = useState('');
    const [filteredProduct, setFilteredProduct] = useState(products);
    const [sortby, setSortby] = useState('id');
    useEffect( () => {
        const _filteredProduct = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        const _sortedList = sortList(_filteredProduct, sortby);
        setFilteredProduct(_sortedList);
    },[query, sortby]);



    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSortChange = (e) => {
        setSortby(e.target.value);
    }


    const showProducts = () => {
        return (
            <div className={styles["card-container"]}>
                {
                    filteredProduct.map(product => (
                       <Card key={Math.random()} product={product}/>
                    ))
                }
            </div>
        )
    }

    const showMessage = () => {
        return (
            <>
                <span className={styles.message}>No Matching result found for <em>'{query}'</em>, try with another search</span>
            </>
        )
    }
    return (
    < >
        <div className="listing">
            {/* Hero section */}
            <Hero />
            {/* found result */}
            <span className={stylesC.foundItem}>Found {filteredProduct.length} items</span>

            {/* search */}
            <Search query={query} handleOnChange={handleOnChange}/>

            {/* sort by */}
            <SortBy handleSortChange={handleSortChange}/>
            {/* list of products */}
            {filteredProduct.length !== 0 ? showProducts()  : showMessage()}
            
        </div>
    </>
  )
}

export default ProductListing;
