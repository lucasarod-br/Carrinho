import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Product from "./Product";

const StyledProducts = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 95vw;
    max-width: 680px; 
    padding: 2rem 1rem;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #fff;
    margin: auto auto;
`

function Products({ price }) {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <StyledProducts>
      {cartItems.map((iten) => (
        <Product 
            key={iten.product.sku} 
            img={iten.product.imageObjects[0].thumbnail}
            name={iten.product.name}
            price={price}
            maxPrice={price && iten.product.priceSpecification.maxPrice}
            originalPrice={price && iten.product.priceSpecification.originalPrice}
            
            />
      ))}
    </StyledProducts>
  );
}

export default Products;
