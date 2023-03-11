import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Home = styled.a`
  height: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Home href="#home">
            <Logo src="./img/logo.png" />
          </Home>
          <List>
            <ListItem href="#home">Home</ListItem>
            <ListItem href="#studio">Who I am</ListItem>
            <ListItem href="#works">Works</ListItem>
            <ListItem href="#contact">Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* <Icon src="./img/search.png" /> */}
          <Avatar src="./img/ale.png" />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
