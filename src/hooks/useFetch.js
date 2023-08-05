import { useEffect} from "react";
import { getProduct } from "../Redux/productSlice";
import { useDispatch } from "react-redux";

const useFetch = (endpoint) => {
  const dispatch = useDispatch();
  useEffect(() => {
    apiCall();
  }, [endpoint]);

  const apiCall = () => {
    dispatch(getProduct(endpoint));
  };
};

export default useFetch;
