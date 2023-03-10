  import { Container } from "components/Container";
import { Text } from "components/Text/style";
  import React from "react";
  import { useSelector } from "react-redux";
  import Product from "./Product";



  function Products({ price }) {
    const cartItems = useSelector((state) => state.cart.items);
    const mb = (!price ? '20px' : '0px')
    return (
      <Container style={{'gap': '50%', 'padding': '24px 0', 'marginBottom': mb }}>
        {!price && <Text style={{'alignSelf': 'flex-start', marginLeft: '36px'}} size='20'>Produtos</Text> }
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
