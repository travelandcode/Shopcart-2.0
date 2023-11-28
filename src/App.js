import './App.css';
import './index.css'
import Home from './pages/home.js'
import Cart from './pages/cart.js'
import { CartProvider } from './providers/cart_provider.js';
import { ProductProvider } from './providers/product_provider.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './providers/user_provider.js';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <UserProvider>
          <BrowserRouter>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </BrowserRouter>
          </UserProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
