import React , {createContext, useState, useEffect} from 'react';
import axios from 'axios';

import dslr from '../assests/dslr.jpg';
import headphone from '../assests/headphone.jpg';
import iphone from '../assests/iphone.jpg';
import microphone from '../assests/microphone.jpg';
import perfume from '../assests/perfume.jpg';
import rings from '../assests/rings.jpg';
import shoes from '../assests/shoes.jpg';
import watch from '../assests/watch.jpg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const url = 'https://mocki.io/v1/b4ba6685-6573-43b7-a369-a7808b64047b';

    const [products, setProducts] = useState([
        {id:1, name:'Dslr', price: 15000, image:dslr, status:'hot'},
        {id:2, name:'Headphone', price: 5000, image:headphone, status:'new'},
        {id:3, name:'Iphone', price: 150000, image:iphone, status:'new'},
        {id:4, name:'Microphone', price: 15000, image:microphone, status:'hot'},
        {id:5, name:'Perfume', price:4000 , image:perfume, status:'hot'},
        {id:6, name:'Rings', price: 1500000, image:rings, status:'new'},
        {id:7, name:'Shoes', price: 1500, image:shoes, status:'new'},
        {id:8, name:'Watch', price: 10000, image:watch, status:'new'},
    ]);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            //setProducts(response.data.products);
            console.log(response.data.products);
        })
    }, [url])

    

    return(
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
    )

}

export default ProductContextProvider