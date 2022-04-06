import { ShoppingCart } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../style/Header.css";

const Header = () => {
  const Basket = useSelector((state) => state.Basket);
  const user = useSelector((state) => state.user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="main">
        <div className="img">
          <Link exact to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
              className="header-logo"
            />
          </Link>
        </div>
        <div className="header-search big-screen">
          <input
            type="text"
            className="header-input"
            placeholder="Search Amazon"
          />
          <SearchIcon className="search-icon" />
        </div>

        <div className="header-nav">
          <Link to={!user && "/Login"}>
            <div className="header-option" onClick={handleAuthentication}>
              <span className="option-line1">Hello</span>
              <span className="option-line2">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header-option hide">
            <span className="option-line1">Returns</span>
            <span className="option-line2">&Orders</span>
          </div>
          <div className="header-option hide">
            <span className="option-line1">Your</span>
            <span className="option-line2">Prime</span>
          </div>
          <Link exact to="/Checkout">
            <div className="shopping-cart">
              <ShoppingCart className="Shopping-cart" />
              <span className="option-line2 shopping-cartCount">
                {Basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className=" small-screen">
        <input
          type="text"
          className="header-input"
          placeholder="Search Amazon"
        />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default Header;
