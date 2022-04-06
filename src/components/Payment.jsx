import CheckoutProduct from "./CheckoutProduct";
import "../style/payment.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const Payment = () => {
    const basket =  useSelector(state =>  state.Basket); 
    const user =  useSelector(state =>  state.user); 
    const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

    return (
        <div className="payment">
            <div id="payment"></div>
            <div className="payment-container" id="top">

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles , CA</p>
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket?.map((item ,index)=> (
                            <CheckoutProduct 
                            item={item} 
                            key={index} 
                            index={index}/>
                        ))}
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">

                    </div>
                </div>
               <Link to="#top" className="top">Back To top</Link>
            </div>
        </div>
    )
}

export default Payment
