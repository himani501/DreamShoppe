import React from "react";
import styled from "styled-components";
import { products } from "../images/Products"
import ProductItem from "./ProductItem";

const Container = styled.div``

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