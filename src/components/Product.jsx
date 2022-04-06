import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import "../style/Product.css";

const ADDTOBASKET = "ADDTOBASKET";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = (item) => {
    dispatch({
      type: ADDTOBASKET,
      item: item,
    });
  };
  return (
    <div id={id} className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product-img" />

      <Button
        variant="contained"
        onClick={() =>
          addToBasket({
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          })
        }
      >
        Add to Basket
      </Button>
    </div>
  );
};

export default Product;
