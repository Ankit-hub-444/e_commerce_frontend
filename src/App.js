import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import Detail from './components/Details/Details.js'
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});
  //const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const feProducts = async () => {
    // const { data } = await commerce.products.list();

  // data =  await fetch('url')
  // fetch('http://example.com/movies.json', {method : "POST", body : data})
  fetch('http://127.0.0.1:3000/product')
  .then(response => response.json())
  .then(data =>{ console.log(data); setProducts(data);});

    
  };


  useEffect(() => {
    feProducts();
    // fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        {/* totalItems={cart.total_items} */}
        <Navbar  handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path="/">
          {/* onAddToCart={handleAddToCart} handleUpdateCartQty */}
            <Products products={products}  />
          </Route>

          <Route exact path="/details/:productId">
             <Detail />
          </Route>
          {/* <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;


  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);

  //   setCart(item.cart);
  // };

  // const handleUpdateCartQty = async (lineItemId, quantity) => {
  //   const response = await commerce.cart.update(lineItemId, { quantity });

  //   setCart(response.cart);
  // };

  // const handleRemoveFromCart = async (lineItemId) => {
  //   const response = await commerce.cart.remove(lineItemId);

  //   setCart(response.cart);
  // };

  // const handleEmptyCart = async () => {
  //   const response = await commerce.cart.empty();

  //   setCart(response.cart);
  // };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();

  //   setCart(newCart);
  // };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };