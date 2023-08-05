import "./Cart.scss";

import { IoClose } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ close }) => {
  const { cartData } = useSelector((state) => state.cart);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PublishedKEY);

  const cartcount = cartData.map((e) => e.count);

  const totalprice = cartData.reduce((acc, crr) => {
    acc += crr[0].attributes?.price * crr.count;
    return acc;
  }, 0);

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const url = process.env.REACT_APP_GET_API + "/api/orders";
      const requestBody = {
        products: cartData,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
        },
        body: JSON.stringify(requestBody),
      });

      const session = await response.json();
      await stripe.redirectToCheckout({
        sessionId: session.stripeSession,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-cart">
      <div className="left-opac"></div>
      <div className="right-section">
        <div className="heading">
          <span className="shop-cart">Shopping Cart</span>
          <span className="icon" onClick={close}>
            {" "}
            <IoClose />
            Close
          </span>
        </div>
        <div className="divider"></div>
        {cartcount <= 0 ? (
          <div className="empty-section">
            <BsCartX size={150} />
            <span>No Products in the cart</span>
            <button onClick={close}>Return To Shop</button>
          </div>
        ) : (
          <>
            {cartData.map((e) => (
              <CartItem
                key={e[0].id}
                id={e[0].id}
                data={e[0].attributes}
                count={e?.count}
              />
            ))}
            <div className="footer-sub">
              <div className="subtotal">
                <span className="sub">SubTotal:</span>
                <span className="totalamount">${totalprice}</span>
              </div>
              <div className="chkbtn">
                <button onClick={handleCheckout} className="check-out">
                  Check out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
