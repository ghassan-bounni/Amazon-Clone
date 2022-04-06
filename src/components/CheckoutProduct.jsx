import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import "../style/checkoutProduct.css";

const CheckoutProduct = ({item,index}) => {
    const dispatch = useDispatch();


    const removeFromBasket = ()=>{
        dispatch({
            type: 'REMOVE',
            index: index
        })
    }
    
    return (
    <div className="checkoutProduct" id={item?.id}>
        <div className="checkoutp-row">
            <img
             src={item.image}
              alt="product" /> 
            

            <div className="CheckoutProduct-info">
                <p className="CheckoutProduct-title">{item.title}</p>
                <p className="CheckoutProduct-price">
                <small>$</small>
                <strong>{item.price}</strong>
                </p>
                <div className="CheckoutProduct-rating">
                        {Array(item.rating)
                         .fill()
                        .map((_,index) => (
                        <p key={index}>⭐</p>
                        ))}
                </div>
            </div>
        </div>
        
                <Button variant="contained" onClick={removeFromBasket}>Remove From Basket</Button>

    </div>
    )
}

export default CheckoutProduct;
