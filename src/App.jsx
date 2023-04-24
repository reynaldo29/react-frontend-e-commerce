// import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

// import {Pay} from "./components/Pay"
// import {Success} from "./components/Success"
import React from "react";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";

const App = () => {
  const user = false
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?<Navigate to="/"/>: <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;

/* function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />}>
          
        </Route>

        <Route path="/success" element={ <Success />}>
         
        </Route>
        </Routes>
    </Router> 
  );
}

export default App; */
