import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";

import Newsletter from "../Footer/Newsletter/Newsletter";
import { Provider } from "react-redux";
import Store from "../../Redux/ReduxStore";

const NavigationBar = () => {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Newsletter />
        <Footer />
      </Provider>
    </>
  );
};

export default NavigationBar;
