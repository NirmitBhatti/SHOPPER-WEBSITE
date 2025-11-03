import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./LayOut";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";


function Rou() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory category="kid" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Rou;


