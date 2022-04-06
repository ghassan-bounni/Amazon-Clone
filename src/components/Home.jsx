import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Home.css";
import Product from "./Product";
import Carousel from "../carousel.js";

const Home = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return (
    <div className="home">
      <div className="home-container" id="top">
        <div className="home-image">
          <Carousel />
        </div>

        <div className="product-slider">
          <Product
            id={12321341}
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={49538094}
            title="Kenwood KMix Stand Mixer for
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />

          <Product
            id={4903850}
            title="Samsung LC49RG90SSUXEN 49* Curved
                    LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={23445930}
            title="Amazon Echo (3rd generation) |Smart speaker with Alexa, Charcoal ERIC RIES Add to B Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf? $300x400_retinamobilex2$"
          />
          <Product
            id={3254354345}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id={90829332}
            title="Samsung LC49RG90SSUXEN 49' CurvedLED Gaming Monitor Super Ultra WideDual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id={49538094}
            title="Kenwood KMix Stand Mixer for
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />

          <Product
            id={4903850}
            title="Samsung LC49RG90SSUXEN 49* Curved
                    LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={23445930}
            title="Amazon Echo (3rd generation) |Smart speaker with Alexa, Charcoal ERIC RIES Add to B Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf? $300x400_retinamobilex2$"
          />
          <Product
            id={3254354345}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id={90829332}
            title="Samsung LC49RG90SSUXEN 49' CurvedLED Gaming Monitor Super Ultra WideDual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home-grid">
          <Product
            id={12321341}
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={49538094}
            title="Kenwood KMix Stand Mixer for
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />

          <Product
            id={4903850}
            title="Samsung LC49RG90SSUXEN 49* Curved
                    LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={23445930}
            title="Amazon Echo (3rd generation) |Smart speaker with Alexa, Charcoal ERIC RIES Add to B Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf? $300x400_retinamobilex2$"
          />
          <Product
            id={3254354345}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id={90829332}
            title="Samsung LC49RG90SSUXEN 49' CurvedLED Gaming Monitor Super Ultra WideDual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id={49538094}
            title="Kenwood KMix Stand Mixer for
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />

          <Product
            id={4903850}
            title="Samsung LC49RG90SSUXEN 49* Curved
                    LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={23445930}
            title="Amazon Echo (3rd generation) |Smart speaker with Alexa, Charcoal ERIC RIES Add to B Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf? $300x400_retinamobilex2$"
          />
          <Product
            id={3254354345}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id={90829332}
            title="Samsung LC49RG90SSUXEN 49' CurvedLED Gaming Monitor Super Ultra WideDual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <Link to="#top" className="top">
          Back To top
        </Link>
      </div>
    </div>
  );
};

export default Home;
