import "./SingleProduct.scss";
import {
  FaPinterest,
  FaLinkedinIn,
  FaCartPlus,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, decrement, increment } from "../../Redux/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const [prodid, setprodid] = useState([]);
  const { cartData } = useSelector((state) => state.cart);

  const quantity = cartData.map((e) => e.count);
  const itemID = cartData.map((e) => e[0].id);

  const dispatch = useDispatch();

  const stringdata = prodid?.map((e) => e.attributes);

  const idcat = stringdata?.map((e) => e.categories?.data?.[0].id);

  const title = prodid?.map((e) => e.attributes?.title);
  const desc = prodid?.map((e) => e.attributes?.description);
  const price = prodid?.map((e) => e.attributes?.price);
  const cattit = prodid?.map(
    (e) => e.attributes?.categories?.data?.[0].attributes?.title
  );
  const imagedata = prodid?.map((e) => e.attributes?.img?.data?.[0]);
  const addToCart = (prodid) => {
    dispatch(addCart(prodid));
  };

  useEffect(() => {
    getproductbyid();
  }, [id]);

  async function getproductbyid() {
    const url =
      process.env.REACT_APP_GET_API +
      `/api/products?populate=*&filters[id]=${id}`;

    const data = await fetch(url, {
      headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
      },
    });
    const res = await data.json();

    setprodid(res.data);
  }

  const incrementitem = (itemID) => {
    dispatch(increment({ id: itemID[0] }));
  };

  const decrementitem = (itemID) => {
    if (quantity[0] <= 0) {
      return 1;
    }
    dispatch(decrement({ id: itemID[0] }));
  };

  return (
    <div className="main-container">
      <div className="single-content">
        <div className="left">
          {imagedata?.map((e, index) => (
            <img
              key={index}
              src={process.env.REACT_APP_GET_API + e.attributes?.url}
              alt=""
            />
          ))}
        </div>
        <div className="right-section">
          <div className="title">{title}</div>
          <div className="price">${price}</div>
          <span className="Desc">{desc}</span>

          <div className="button-content">
            {quantity <= 0 ? null : (
              <div className="span-content">
                <span onClick={() => decrementitem(itemID)}>-</span>
                <span>{quantity[0]}</span>
                <span onClick={() => incrementitem(itemID)}>+</span>
              </div>
            )}

            <div className="add-to-cart-btn">
              <button onClick={() => addToCart(prodid)}>
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="category-section">
            <div className="cat-title"> Category:</div>
            <div className="c-item">{cattit}</div>
          </div>
          <div className="social-media">
            <div className=" cat-title"> Share:</div>
            <div className="c-item">
              <FaFacebookF size={16} />
              <FaTwitter size={16} />
              <FaInstagram size={16} />
              <FaLinkedinIn size={16} />
              <FaPinterest size={16} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts id={id} categoryid={idcat} />
    </div>
  );
};

export default SingleProduct;
