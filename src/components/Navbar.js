import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../GlobalContext/CartContext';

function Navbar() {
    const {totalPrice, qty} = useContext(CartContext);
    return (
        <nav>
            <ul className="left">
                <li><Link to= '/'>Yash Shopping Mart</Link></li>
            </ul>
            <ul className="right">
                <li>
                    <Link to ='cart'>
                        <span className="shoppingCart">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cartCount">{qty}</span>
                        </span>
                        <span>total cart: Rs.{totalPrice}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
