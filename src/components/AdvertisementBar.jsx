import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: #aff34f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdvertisementBar = () => {
    return <Container> Super Deal Offer!!! Get free shipping over Rs.999 only. </Container>
}

export default AdvertisementBar;