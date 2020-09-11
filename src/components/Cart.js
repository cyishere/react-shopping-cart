/*
 * @Author: chen yang
 * @Date: 2020-09-11 14:26:54
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-09-11 21:25:30
 */
import React, { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

const Cart = ({ cartItems, removeFromCart, createOrder }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInput = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    console.log("userInfo", userInfo);
  };

  const checkoutOrder = (event) => {
    event.preventDefault();

    const order = {
      ...userInfo,
      cartItems,
    };

    // pass the `order` to parent component
    // use the function which passed from the parent
    createOrder(order);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart it empty.</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart.
        </div>
      )}

      <div className="cart">
        <Fade left cascade>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {item.count} × {formatCurrency(item.price)}{" "}
                    <button
                      className="button"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>

      {cartItems.length !== 0 && (
        <div>
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce(
                    (sum, item) => sum + item.price * item.count,
                    0
                  )
                )}
              </div>
              <button
                className="button primary"
                onClick={() => setShowCheckout(true)}
              >
                Proceed
              </button>
            </div>
          </div>

          {showCheckout && (
            <Fade right cascade>
              <div className="cart">
                <form onSubmit={checkoutOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email:</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleInput}
                      />
                    </li>
                    <li>
                      <label>Name:</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={handleInput}
                      />
                    </li>
                    <li>
                      <label>Address:</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={handleInput}
                      />
                    </li>
                    <li>
                      <button type="submit" className="button primary">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </Fade>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
