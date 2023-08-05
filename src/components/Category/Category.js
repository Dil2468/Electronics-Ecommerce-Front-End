import Products from "../Products/Products";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const { id } = useParams();
  const [getcatbyid, setGetcatbyid] = useState([]);
  const cattitle = getcatbyid?.map((e) => e.attributes?.categories?.data?.[0]);
  const titledata = cattitle?.map((e) => e.attributes?.title);

  useEffect(() => {
    getcatbyprod();
  }, [id]);

  async function getcatbyprod() {
    const url =
      process.env.REACT_APP_GET_API +
      `/api/products?populate=*&filters[categories][id]=${id}`;

    const data = await fetch(url, {
      headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
      },
    });
    const res = await data.json();
    setGetcatbyid(res.data);
  }

  return (
    <div className="category-main">
      <div className="category-content">
        <div className="title">{titledata[0]}</div>
        <div className="prod-container">
          <Products heading={true} data={getcatbyid} />
        </div>
      </div>
    </div>
  );
};

export default Category;
