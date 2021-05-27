import Store from "./components/products/Store"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/products/Cart";
import { CartContext } from "./components/products/CartContext";
import { useState } from "react";
import NotFound from "./components/error/NotFound";
import ReviewForm from "./components/reviews/ReviewForm";
import Review from "./components/reviews/Review";

function App() {

  const [value, setValue] = useState(0);
  const [cartItems, setCartItems] = useState([])
  const [cartItemsPrice, setCartItemsPrice] = useState([])

  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={{value, setValue, cartItems, setCartItems, cartItemsPrice, setCartItemsPrice}}>
            <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" />
              <Route path="/store">
                <Store />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/reviews">
                <Review />
              </Route>
              <Route path="/create">
                <ReviewForm />
              </Route>
              <Route path="/products/:id">
                <ProductDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>  
            </Switch>
          </div>
        </CartContext.Provider>
      </div>
    </Router>
  );
  
}

export default App;
