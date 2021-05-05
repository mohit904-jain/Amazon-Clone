import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import "./Navbar.css";

function NavbarDisplay({ basket, user, handleAuthentication }) {
  return (
    <div className="navbar">
            
            <p className="header__line"><DehazeOutlinedIcon /></p>
            
            <div className="navbar__option">
                <span>Best Sellers</span>
            </div>
            <div className="navbar__option">
                <span>Mobiles</span>
            </div>
            <div className="navbar__option">
                <span>Fashion</span>
            </div>
            <div className="navbar__option">
                <span>New Releases</span>
            </div>
            <div className="navbar__option">
                <span>Today's Deals</span>
            </div>
            <div className="navbar__option">
                <span>Prime</span>
            </div>
            <div className="navbar__option">
                <span>Electronics</span>
            </div>
            <div className="navbar__option">
                <span>Customer Service</span>
            </div>
            <div className="navbar__option">
                <span>Amazon Pay</span>
            </div>
            <div className="navbar__option">
                <span>Home and Kitchen</span>
            </div>
        </div>
  );
}

export default NavbarDisplay;
