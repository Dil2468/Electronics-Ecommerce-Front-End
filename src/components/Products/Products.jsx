import "./Products.scss";
import Product from "./Product/Product";
import { useSelector } from "react-redux";
import statusCode from "../../util/statusCode";

const Products = ({ heading, headingText, data }) => {
  const { status } = useSelector((state) => state.product);

  if (status === statusCode.LOADING) {
    return <p>Loading !!!!!!!!!!!!</p>;
  } else if (status === statusCode.ERROR) {
    return window.alert("Something went Wrong");
  } else
    return (
      <div className="main-product">
        {!heading && <div className="product-heading"> {headingText}</div>}

        <div className="product">
          {data?.map((e) => (
            <Product id={e.id} key={e.id} productdata={e} />
          ))}
        </div>
      </div>
    );
};

export default Products;
