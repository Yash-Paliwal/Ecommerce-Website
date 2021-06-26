import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from '../GlobalContext/ProductsContext';
import {CartContext} from'../GlobalContext/CartContext';

function Products() {
    const {products} = useContext(ProductContext);
    const {shoppingCart, dispatch} = useContext(CartContext);
    return (
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <Link to = {`/product/${product.id}`}>
                        <div className='product-image'>
                            <img src={product.image} alt='not found'/>
                        </div>
                    </Link>
                    <div className='product-details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}
                        </div>
                    </div> 
                    <div className='add-to-cart' onClick={() => dispatch({
                        type:'ADD_TO_CART',
                        id: product.id,
                        products})} >add to cart</div>

                    <div>{ shoppingCart.find(cart => cart.id === product.id) ? <div className='Remove-from-cart' onClick={() => dispatch({
                        type:'REMOVE_FROM_CART',
                        id: product.id,
                        products})} >Remove from cart</div> : null }</div>    
                </div>
            ))}
        </div>
    )
}

export default Products
