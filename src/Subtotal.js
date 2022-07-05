import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { SportsBasketball } from '@material-ui/icons';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkout" /> This order
                            contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal