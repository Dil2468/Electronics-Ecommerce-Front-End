import "./Category.scss";

import { getCategory } from "../../../Redux/categorySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import statusCode from "../../../util/statusCode";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.category);
  const navigat = useNavigate();

  useEffect(() => {
    dispatch(
      getCategory(
        "/api/categories?populate=*&pagination[start]=0&pagination[limit]=4"
      )
    );
  }, [dispatch]);

  if (status === statusCode.LOADING) {
    return <p>Loading!!!!!!!!!!!</p>;
  } else if (status === statusCode.ERROR) {
    return window.alert("Something Went Wrong");
  } else
    return (
      <div className="shop-by-category">
        {/* <div className="leftarrow">
          <FaAngleLeft size={30} />
        </div> */}
        <div className="grid-category">
          {data?.map((e) => (
            <div
              className="img-category"
              key={e.id}
              onClick={() => navigat(`/category/${e.id}`)}
            >
              <img
                src={
                  process.env.REACT_APP_GET_API +
                  e.attributes.img.data[0].attributes.url
                }
                alt=""
              />
            </div>
          ))}
        </div>
        {/* <div className="rightarrow">
          {" "}
          <FaAngleRight size={30} />
        </div> */}
      </div>
    );
};

export default Category;
