  import { Container } from "components/Container";
  import React from "react";
  import { useSelector } from "react-redux";
  import Product from "./Product";



  function Products({ price }) {
    const cartItems = useSelector((state) => state.cart.items);

    return (
      <Container>
        {cartItems.map((iten) => (
          <Product 
              key={iten.product.sku} 
              img={iten.product.imageObjects[0].small}
              name={iten.product.name}
              price={price}
              maxPrice={price && iten.product.priceSpecification.maxPrice}
              originalPrice={price && iten.product.priceSpecification.originalPrice}
              
              />
        ))}
      </Container>
    );
  }

  export default Products;
