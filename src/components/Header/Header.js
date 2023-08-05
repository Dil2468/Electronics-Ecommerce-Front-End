import "./Header.scss";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useSelector } from "react-redux";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [showsearch, setShowSearch] = useState(false);

 // const [color, setColor] = useState("");

  const { cartData } = useSelector((state) => state.cart);

 // const cartcount = cartData.map((e) => e.count);

  const totalCount = cartData.reduce((acc, value) => (acc += value.count), 0);

  const nav = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const opencart = () => {
    setShowcart(true);
  };

  const closecart = () => {
    setShowcart(false);
  };
  const opensearch = () => {
    setShowSearch(true);
  };
  const closesearch = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => nav("/")}>Home </li>
            <li>About</li>
            <li onClick={() => nav("/category/1")}>Categories</li>
          </ul>
          <div className="center" onClick={() => nav("/")}>
            {" "}
            DK|Design{" "}
          </div>

          <div className="right">
            <TbSearch onClick={opensearch} />
            <AiOutlineHeart
             
            />

            <span className="cart-icon" onClick={opencart}>
              <CgShoppingCart />
              {totalCount <= 0 ? null : <span>{totalCount}</span>}
            
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart close={closecart} />}
      {showsearch && <Search close={closesearch} />}
    </>
  );
};

export default Header;
