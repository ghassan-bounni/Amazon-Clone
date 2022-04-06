import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "../style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const Basket = useSelector((state) => state.Basket);
  const user = useSelector((state) => state.user);
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
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-left" id="top">
          <div>
            <h2> {user?.email}</h2>
            <h3 className="checkout-title">Your Shopping Basket</h3>

            {Basket.map((item, index) => (
              <CheckoutProduct item={item} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal nb={Basket.length} />
        </div>
      </div>

      <Link to="#top" className="top">
        Back to top
      </Link>
    </div>
  );
};

export default Checkout;
