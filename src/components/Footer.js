import React from "react";
import styled from "styled-components";
import {EmailOutlined, Facebook, Instagram, LinkedIn, Pinterest, Twitter} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};   // props in styled components
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DREAMSHOPPE</Logo>
                <Desc>
                    &copy; Himani Bhardwaj <a href="https://www.linkedin.com/in/himani-bhardwaj/">( Linkedin Profile )</a>
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>Email: himanibhardwaj501@gmail.com</ContactItem>
                <ContactItem><LinkedIn style={{marginRight:"10px"}}/>Linkedin: www.linkedin.com/in/himani-bhardwaj</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer