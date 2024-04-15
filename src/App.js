import './App.css';
import './index.css'
import Home from './pages/home.js'
import Cart from './pages/cart.js'
import { CartProvider } from './providers/cart_provider.js';
import { ProductProvider } from './providers/product_provider.js';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { UserProvider } from './providers/user_provider.js';
import Product from './pages/store_product.js';
import Success from './pages/success.js';
import FAQ from './pages/faq.js'
import LoginPage from './pages/login.js';
import SignUpPage from './pages/signup.js';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <UserProvider>
          <BrowserRouter>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path='/signup'>
              <SignUpPage />
            </Route>
          </BrowserRouter>
          </UserProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;