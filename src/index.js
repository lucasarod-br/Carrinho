import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subtotal from "./components/Subtotal";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Header from "./components/Header";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import store from "./states/store";
import {Body} from './style'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Subtotal />}>
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment />} />
            <Route path="success" element={<Success/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </Body>
    </Provider>
  </React.StrictMode>
);
