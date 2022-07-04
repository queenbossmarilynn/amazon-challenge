import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { SportsBasketball } from '@material-ui/icons';

function Subtotal() {
  return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <div>
                    <p>
                        Subtotal (0 items):
                        <strong>0</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkout" /> This order
                        contains a gift
                    </small>
                </div>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={""}
        />

        <button>Proceed to Checkout</button>
    </div>
}

export default Subtotal