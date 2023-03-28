import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    
    
    useEffect(() =>{
       fetch('products.json')
      .then(res => res.json())
      .then(data =>setProducts(data))
    }, []);

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        // step 1: get id
        for(const id in storedCart){
            // step 2: get product by using id
            const savedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step 3: get quantity of the product
            const savedQuantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: add the product to the  saved cart
            savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
    }, [products]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}

                ></Product>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;