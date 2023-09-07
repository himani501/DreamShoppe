import React, {useState} from "react";
import styled from "styled-components";
import {ArrowRightOutlined, ArrowLeftOutlined} from "@mui/icons-material";
import { SliderImages } from "../images/ShopDataImages.js"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden; // it will one image in the page and hide other images present in flex display
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: antiquewhite;
  border-radius: 50%;
  display: flex; // align items horizontally
  align-items: center; // align items vertically
  justify-content: center; // align the item inside items to the center
  position: absolute;
  top: 0;             // to keep the arrow in center of the container
  bottom: 0;          // to keep the arrow in center of the container
  margin: auto;       // to keep the arrow in center of the container
  left: ${props => props.direction === "left" && "10px"};    // handling props in styled component
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;    // to give cursor effect
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease; //animation
  transform: translateX(${(props)=>props.slideIndex * -100}vw); // usage of props in CSS
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: antiquewhite;
`
const ImgContainer = styled.div`
  height: 100%;
  width: 70%;
`
const Image = styled.img`
  height: 100%;
  width:90%;
`
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
  display: flex;
  flex-direction: column; /* Add this line to stack the children vertically */
  align-items: flex-start; /* Optional, align children to the start of the cross axis */
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.a`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 6)
        } else {
            setSlideIndex(slideIndex < 6 ? slideIndex+1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>{handleClick("left")}}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                { SliderImages.map((item) => (
                    <Slide>
                        <ImgContainer>
                            <Image src={item.img} key={item.id}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.description}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                )) }
            </Wrapper>
            <Arrow direction="right" onClick={()=>{handleClick("right")}}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
}

export default Slider;