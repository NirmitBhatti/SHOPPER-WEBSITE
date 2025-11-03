import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Assets/8_1sasa11.jpg";
import cart from "../../Assets/cart.png"

const Navbar = () => {

    const [menu , setMenu] = useState("shop")
    
  return (
    <div className="navbar">
      <div className="nav-logo">
              <img src={logo} alt="" />
             
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration:"none" , color :"black"}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:"none" , color :"black"}}>Menu</Link>{menu === "mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:"none" , color :"black"}}>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:"none" , color :"black"}}>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
        <Link to='login'><button>Login</button></Link>
        <Link to='signup'><button>Signup</button></Link>
              <Link to='/cart'><img src={cart} alt="" /></Link>
              <div className="nav-cart-count">0</div>
          </div>
    </div>
  );
}

export default Navbar;
