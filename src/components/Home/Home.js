import Banner from "./Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import statusCode from "../../util/statusCode";
import { getProduct } from "../../Redux/productSlice";

const Home = () => {
  const { proddata, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct("/api/products?populate=*"));
  }, [dispatch]);

  if (status === statusCode.LOADING) {
    return <p>Loading!!!!!!!!!!!</p>;
  } else if (status === statusCode.ERROR) {
    return window.alert("Something Went Wrong");
  } else
    return (
      <div className="home">
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category />
            <Products headingText="Popular Products" data={proddata} />
          </div>
        </div>
      </div>
    );
};

export default Home;
