import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ProductContextProvider from './GlobalContext/ProductsContext';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContextProvider from './GlobalContext/CartContext';

function App() {
  return (
    <div >
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Products} />
              <Route path='/Cart' exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
