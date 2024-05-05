import './App.css';
import './index.css'
import Home from './pages/home.js'
import Cart from './pages/cart.js'
import { CartProvider } from './providers/cart_provider.js';
import { ProductProvider } from './providers/product_provider.js';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { UserProvider } from './providers/user_provider.js';
import Product from './pages/store_product.js';
import Success from './pages/success.js';
import FAQ from './pages/faq.js'
import LoginPage from './pages/login.js';
import SignUpPage from './pages/signup.js';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/product/:id" component={Product} />
                <Route path="/success" component={Success} />
                <Route path="/faq" component={FAQ} />
                {/* You might want to add a fallback route here for unmatched paths */}
              </Switch>
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;