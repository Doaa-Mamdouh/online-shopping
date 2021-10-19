import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import ProductList from './components/Products/ProductsList/ProductList';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import useFetchAll from './hooks/services/useFetchAll';
import useCart from './hooks/useCart';

function App() {
  const {
    data: products,
    loading,
    error
  } = useFetchAll(["/products"]);

  //Here I simulate a units attribute for each object as the service doesn't have this attr
  const productsWithUnits = products ? products[0].map(obj => ({ ...obj, units: 20 })) : products;

  //TODO use rducer
  // const totalInCart= cart.reduce((sum, { item }) =>  sum + item.quantity, 0)
const {
  cart, 
  addToCart, 
  updateQuanity, 
  deleteItem, 
  emptyCart, 
  totalitems
} = useCart(productsWithUnits);
//const [totalInCart, setTotalInCart] = useState(totalCartItems);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <ProductList addToCart={addToCart} products={productsWithUnits} cartNum={totalitems}/>} />
          <Route
            render={({ location }) => ['/cart'].includes(location.pathname)
              ? <Cart cart={cart} 
                    updateQuanity={updateQuanity}
                    deleteItem={deleteItem}
                    emptyCart={emptyCart}/>
              : null
            }
          />
          <Route path="/:id" render={() => <ProductDetails addToCart={addToCart} />} />
          {/* <Route  path="/cart" element={<Cart/>} />  */}

         
        </Switch>
      </BrowserRouter>

      <Header cartNum={totalitems} />
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
