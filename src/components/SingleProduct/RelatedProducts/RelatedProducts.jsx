import Products from "../../Products/Products";
import "./RelatedProducts.scss";
import { useEffect, useState } from "react";

const RelatedProducts = ({ id, categoryid }) => {
  const [singledata, setSingledata] = useState([]);

  useEffect(() => {
    getproddetails();
  }, [id, categoryid]);

  const getproddetails = async () => {
    const url =
      process.env.REACT_APP_GET_API +
      `/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][id]=${categoryid[0]}&pagination[start]=0&pagination[limit]=4`;
    const data = await fetch(url, {
      headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
      },
    });
    const res = await data.json();
    setSingledata(res.data);
  };

  return (
    <div className="Main">
      <div className="Related-main">
        <div className="layout">
          <Products headingText="Related Products" data={singledata} />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
