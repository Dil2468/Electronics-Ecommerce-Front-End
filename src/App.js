import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NavigationBar from "./components/Navigation/NavigationBar";
import Home from "./components/Home/Home";
import Succes from "./components/Cart/Succes";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/success/" element={<Succes />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
