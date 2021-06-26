import React , {useContext} from 'react';

import {CartContext} from "../GlobalContext/CartContext";

function Cart() {
    const {shoppingCart, totalPrice ,qty, dispatch} = useContext(CartContext);
    return (
        
        <div className= 'container'>
            <div className="cart-container" style={{marginTop:'200px'}}>
                {shoppingCart.length >0 ? 
                    shoppingCart.map(cart =>(
                        <div style={{width:'100%'}}>
                            <span className = 'cart-image'><img src={cart.image} alt='notfound' /></span>
                            <span className='cart-product-name'>{cart.name}</span>
                            <span className='cart-product-price'>{cart.price}</span>
                            <span className='inc' onClick={() => dispatch({type:'INC', id: cart.id, cart})} ><i className="fas fa-plus" ></i></span>
                            <span className='product-quantity' >{cart.qty}</span>
                            <span className='dec' onClick={() => dispatch({type:'DEC', id: cart.id, cart})} ><i className="fas fa-minus" ></i></span>
                            <span className='product-total-price'>{cart.tprice}</span>
                            <span className='delete-product' onClick={() => dispatch({type:'DELETE', id: cart.id, cart})} ><i className = 'fas fa-trash-alt'></i></span>
                        </div>
                    ))
                :
                    'Sorry cart is empty'
                }
                <div>total Price: {totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart;
