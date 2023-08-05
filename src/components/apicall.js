// //import axios from "axios";

// export async function fetchData(path) {
//   const params = {
//     method: "GET",
//     headers: {
//        "Content-Type": "application/json",
//        Accept: "application/json",
//       Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
//     },
//   };
//   try {
//     const url = `${process.env.REACT_APP_GET_API} ${path}`;
//      console.log(url)
//     const catdata = await fetch(url, params);
//   // console.log(catdata)
//     const res = await catdata.json();
//     console.log(res)
//     //  return res.data;
//     console.log(res);
//     return res;
//   } catch (error) {
//     return error;
//   }
// }

// export const makeapicall = axios.create({
//   baseURL: process.env.REACT_APP_GET_API,
//   headers: {
//     Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
//   },
// });
