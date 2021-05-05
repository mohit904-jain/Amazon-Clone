import React from "react";
import "./Home.css";
import { Product } from "../Product";
import { Slider} from '../Slider'
import Carousel from 'react-bootstrap/Carousel'
function HomeDisplay() {
  return (
    <div className="home">
      <div className="home__container">
        {/*<img
          className="home__image"
          src="https://fdn.gsmarena.com/imgroot/news/21/03/oneplus-9-series-leak/-1200/gsmarena_001.jpg"
          alt=""
        />*/}
        <Slider />
        <br></br>
        <h4>Up to 40% off | Sale starts tomorrow</h4>
        <div className="home__row">
          
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Redmi Note 10 PRO"
            price={45000}
            rating={4}
            image="https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/x/i/xiaomi_mi_note_10_pro-.png"
          />
          <Product
            id="49538094"
            title="Nokia 3310 Orange"
            price={3500}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-9pP0F921gBWkjCwR6wo1YEOb7ZZ7wp_4g&usqp=CAU"
          />
          <Product
            id="49538094"
            title="One Plus 9R"
            price={44000}
            rating={4}
            image="data:image/jpeg;base64,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"
          />
        </div>
        <br></br>
        <h4>Today’s Deals</h4>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple iWatch 6 Series"
            price={30000}
            rating={3}
            image="https://www.searchpng.com/wp-content/uploads/2019/01/Apple-Watch-Apple-Watch-Iwatch-PNG-Image.png"
          />
          <Product
            id="23445930"
            title="Apple Airpods air"
            price={19999}
            rating={5}
            image="https://www.freepnglogos.com/uploads/airpods-png/airpods-apple-news-articles-stories-trends-for-today-14.png"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro  (4th Generation)"
            price={68000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <br></br>
        <h4>Deal of the day</h4>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={109498}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <br></br>
        <h4>Up to 60% off | Home essentials from Indian startup</h4>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={4500}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="One Plus 8T"
            price={43000}
            rating={4}
            image="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-lunar.png"
          />
        </div>
        <br></br>
        <h4>Up to 50% off | Nutritional supplements</h4>
        <Carousel className="carosuel">
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item  >
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item>
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <h4>Best Bag and watch of the day</h4>
        <div className="home__row">
          <Product
            id="12321341"
            title="WildCraft Bags"
            price={2500}
            rating={5}
            image="https://purepng.com/public/uploads/large/purepng.com-wildcraft-school-bagbagbackpackswildcraftschool-bag-1421526272693mtmqy.png"
          />
          <Product
            id="49538094"
            title="Adidas Shoes"
            price={8500}
            rating={4}
            image="https://lh3.googleusercontent.com/proxy/ZJ8bnflE0snR4GxTy4AJl7jC_ZcoJxmflN8o_VOXZZuer9Y1-1JdxHBmP7Q0LAMVW3LfTFDXbfyGKLDgpKJ7bgQmi1lHLLmi2wUjG97i-fxkWq6OltOr8XTFv9kDrNjYrWe0dWH91l6jJIw"
          />
        </div>
        <br></br>
        <h4>Fruits and Vegetables</h4>
        <Carousel className="carosuel">
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item  >
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item>
          <Carousel.Item className="carosuelitem">
          <div className="home__row">
          <Product
            id="12321341"
            title="Apple Iphone 12"
            price={124500}
            rating={5}
            image="http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
          <Product
            id="49538094"
            title="Apple Macbook Air"
            price={123900}
            rating={4}
            image="http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"
          />
        </div>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <h4>From your search history</h4>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={800}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={5000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <br></br>
        <h4>Product of the day</h4>
        <div className="home__row">
          <Product
            id="90829332"
            title="Apple iMac Pro"
            price={1098980}
            rating={4}
            image="https://help.apple.com/assets/5E9759AA680CE290321CE8C3/5E989A9A680CE217771C78AD/en_US/fbac8523b0d81e806024f9d46cb3b976.png"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDisplay;
