import React from "react";
import "./Footer.css";
import footer_logo from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png"; 
import pintester_icon from "../../Assets/pintester_icon.png"; 
import whatsapp_icon from "../../Assets/whatsapp_icon.png"; 
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="Footer-Links">
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="Footer-Social-Icon">
        <div className="Footer-Icons-Container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="Footer-Icons-Container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="Footer-Icons-Container">
          <img src={whatsapp_icon} alt="" />
        </div>
          </div>
          <div className="Footer-Copyright">
              <hr />
              <p>Copyright @ 2023 - All Right Reserved</p>
          </div>
    </div>
  );
};

export default Footer;
