import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
          <div className='product-info'>
          <img src={img} alt='' />  
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p className='ratings'>Ratings: {ratings}stars</p>
          </div>
          <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;