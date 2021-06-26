const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice ,qty}= state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    let updatedtprice;

    switch(action.type){

        case 'ADD_TO_CART':
            const check =shoppingCart.find(product => product.id === action.id);
            if(check){
                product = shoppingCart.find(cart => cart.id === action.id);
                product.qty = product.qty+1;
                updatedPrice = totalPrice+product.price;
                console.log(totalPrice);
                updatedQty = qty+1;
                product.tprice = product.tprice + product.price;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
            }else {
                product = action.products.find(product => product.id === action.id);
                product['qty'] = 1;
                product['tprice'] = product.price;
                updatedQty = qty+1;
                updatedPrice = totalPrice +product.price;
                return {shoppingCart: [product, ...shoppingCart], totalPrice:updatedPrice, qty:updatedQty}
            }
            break;
        
        case 'REMOVE_FROM_CART':
            product = shoppingCart.find(cart => cart.id === action.id);
            const filter = shoppingCart.filter(product => product.id !== action.id)
            updatedPrice = totalPrice-product.tprice;
            updatedQty = qty - product.qty;
            return {shoppingCart:[...filter], totalPrice: updatedPrice, qty:updatedQty}
            break;                


        case 'INC':
            product = action.cart;
            product.qty = product.qty+1;
            updatedPrice = totalPrice+product.price;
            updatedQty = qty+1;
            product.tprice = product.tprice + product.price;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
            break;
        
        case 'DEC':
            product = action.cart;    
            if(product.qty>1){
                product.qty = product.qty-1;
                updatedPrice = totalPrice-product.price;
                updatedQty = qty- 1;
                product.tprice = product.tprice - product.price;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
            }
            else{
                return state
            }
            break;

        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.id !== action.id)
            product = action.cart;
            updatedPrice = totalPrice-product.tprice;
            updatedQty = qty - product.qty;
            return {shoppingCart:[...filtered], totalPrice: updatedPrice, qty:updatedQty}
            break;                

        default:
                return state;
    }
    
}

export default CartReducer;