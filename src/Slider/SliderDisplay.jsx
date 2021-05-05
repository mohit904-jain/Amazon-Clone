import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel'


function SliderDisplay({ basket, user, handleAuthentication }) {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:"50vh"}} src={require("../Slider_Images/image1.jpg")}/>
            </Carousel.Item>
            {}
            <Carousel.Item>
                <img className="d-block w-100" style={{height:"50vh"}} src={require("../Slider_Images/image2.jpg")}/>
            </Carousel.Item>
            {}
            <Carousel.Item>
                <img className="d-block w-100" style={{height:"50vh"}} src={require("../Slider_Images/image3.jpg")}/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:"50vh"}} src={require("../Slider_Images/image4.jpg")}/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:"50vh"}} src={require("../Slider_Images/image5.jpg")}/>
            </Carousel.Item>
           
        </Carousel>
        

    </div>
  );
}

export default SliderDisplay;
