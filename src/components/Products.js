import React from "react";
import styled from "styled-components";
import { products } from "../images/Products"
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap; // to wrap the objects in a container
  justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {products.map((item) => (
                <ProductItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products