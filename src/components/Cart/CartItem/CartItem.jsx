import "./CartItem.scss";
import { IoClose } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../../../Redux/cartSlice";
const CartItem = ({ data, id, count }) => {
  const dispatch = useDispatch();

  const incrementitem = (id) => {
    dispatch(increment({ id }));
  };

  const decrementitem = (id) => {
    if (count <= 0) {
      return 1;
    }
    dispatch(decrement({ id }));
  };

  const deleteitem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="card-container">
      <div className="card-grid">
        <div className="img-cont">
          <img
            src={
              process.env.REACT_APP_GET_API + data.img?.data[0]?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="text-section">
          <div className="title">{data.title}</div>
          <div className="Count">
            <span onClick={() => decrementitem(id)}>-</span>
            <span>{count}</span>
            <span onClick={() => incrementitem(id)}>+</span>
          </div>
          <div className="Multiply">
            <span>{count}</span>
            <span>*</span>
            <span>${count * data?.price}</span>
          </div>
        </div>
        <div className="closeicon">
          <IoClose onClick={() => deleteitem(id)} size={20} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
