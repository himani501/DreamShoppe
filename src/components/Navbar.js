import React from "react";
import DreamShoppeLogo from '../images/DreamShoppeLogo.png';
import styled from "styled-components";
import {Search, ShoppingCart} from "@mui/icons-material";

const Container = styled.div`
    width: 100%;
    height: 30%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
`;
const Wrapper = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;   // align multiple items to center
`;
const Center = styled.div`
    flex:1;
    text-align: center;  // align text to center
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end; // align items to the right
    margin-right: 30px;
`;
const SearchWrapper = styled.div`
    display: flex;
    margin-left: 30px;
    padding: 5px;
    align-items: center;
    border: 0.5px solid lightgray;
`;
const Input = styled.input`
    border: none;
    height: 100%;
`
const Register = styled.a`
    cursor: pointer;
    margin-right: 25px;
`;
const SignIn = styled.a`
    cursor: pointer;
    margin-right: 25px;
`;
const ShoppingCartWrapper = styled.div`
    cursor: pointer;
`;
const Title = styled.h1`
  font-weight: 900;
  letter-spacing: 3px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <img
                        style={{ height: '70px', paddingLeft: '30px', paddingRight: '40px' }}
                        src={DreamShoppeLogo}
                        alt="DreamShoppe Logo"
                    />
                    <SearchWrapper>
                        <Input/>
                        <Search style={{color:"grey", fontSize:25}}/>
                    </SearchWrapper>
                </Left>
                <Center>
                    <Title>DREAMSHOPPE</Title>
                </Center>
                <Right>
                    <Register>Register</Register>
                    <SignIn>SignIn</SignIn>
                    <ShoppingCartWrapper>
                        <ShoppingCart/>
                    </ShoppingCartWrapper>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;