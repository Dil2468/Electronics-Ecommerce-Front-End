import "./Search.scss";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/productSlice";

const Search = ({ close }) => {
  const { proddata } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    dispatch(
      getProduct(
        `/api/products?populate=*&filters[title][$contains]=${searchItem}`
      )
    );
  }, [dispatch, searchItem]);

  const onhandleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="search-main">
      <div className="text-content">
        <input
          type="text"
          autoFocus
          placeholder="Search For Products"
          value={searchItem}
          onChange={onhandleChange}
        />
        <IoClose onClick={close} />
      </div>
      {searchItem.length === 0 ? (
        <div className="text">
          <span>Start typing to see products you are looking for.</span>
        </div>
      ) : (
        <div className="grid-items">
          <div className="item-content">
            {proddata?.map((e) => (
              <div key={e.id} className="grid-search">
                <div className="search-img">
                  <img
                    src={
                      process.env.REACT_APP_GET_API +
                      e.attributes?.img?.data?.[0].attributes?.url
                    }
                    alt=""
                  ></img>
                </div>
                <div className="text-search">
                  <div className="text-ser">{e.attributes.title}</div>
                  <div className="desc">{e.attributes.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="grid-items">
        <div className="item-content">
          {proddata?.map(e=>(
          <div key={e.id} className="grid-search">
            <div className="search-img">
              <img src={process.env.REACT_APP_GET_API + e.attributes?.img?.data?.[0].attributes?.url} alt=""></img>
            </div>
            <div className="text-search">
              <div className="text-ser">
                {e.attributes.title}
               
              </div>
              <div className="desc">
                {e.attributes.description}
              </div>
            </div>
          </div>
           ))} 
        </div>
      </div> */}
    </div>
  );
};

export default Search;
