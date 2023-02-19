import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import styled from 'styled-components';
import Subtotal from './components/Subtotal';
import Cart from './pages/Cart';





const Body = styled.div`
padding: 0;
  background-color: #F5F5F5;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body>
      <Router>
        <Routes >
          <Route path="/" element={<Subtotal/>}>

          <Route path='cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </Router>

    </Body>
  </React.StrictMode>
);

