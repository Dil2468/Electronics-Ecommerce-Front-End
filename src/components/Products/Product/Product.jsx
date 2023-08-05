import "./Product.scss";

import { useNavigate } from "react-router-dom";

const Product = ({ id, productdata }) => {
  const nav = useNavigate();

  const titledata = productdata?.attributes?.title;
  const pricedata = productdata?.attributes?.price;
  const imagedata = productdata?.attributes?.img.data[0];
  //console.log(imagedata.attributes.url)
  return (
    <>
      <div className="Prod-card" onClick={() => nav("/product/" + id)}>
        <div className="img-cont">
          <img
            src={process.env.REACT_APP_GET_API + imagedata.attributes.url}
            alt=""
          />
        </div>

        <div className="text">
          <div className="name">{titledata} </div>

          <span className="price">${pricedata}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
