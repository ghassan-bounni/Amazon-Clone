
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import '../style/Subtotal.css';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const basket = useSelector(state => state.Basket);
    const getBasketTotal = (basket)=> basket.reduce((total,e)=> e.price+total,0);
    const navigate = useNavigate();
      
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=> (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" name="gift" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
               value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <Button variant="contained" onClick={()=>navigate("/Payment")}>Proceed to checkout</Button>
        </div>
    )
}

export default Subtotal;
