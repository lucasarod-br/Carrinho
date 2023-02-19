import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Subtotal from "./components/Subtotal";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Header from "./components/Header";
import Sucess from "./pages/Success";

const Body = styled.div`
  padding: 0;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Subtotal />}>
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="success" element={<Success/>}/>
          </Route>
        </Routes>
      </Router>
    </Body>
  </React.StrictMode>
);
