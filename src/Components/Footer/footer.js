import React from "react";
import styled from "styled-components";
import Logo from "../Logo/logo";

const Container = styled.footer`
  padding: 40px 0;
  background-color: #3da9fc;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.i`
  &:hover {
    background-color: #fffffe;
    color: #094067;
  }
  color: #fffffe;
  width: 60px;
  background-color: #094067;
  height: 60px;
  text-align: center;
  font-size: 25px;
  line-height: 60px;
  border-radius: 100%;
  margin: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
  display: inline;
  color: white;
  font-weight: 500;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const NavigationItem = styled.li`
  margin: 0 7px;
  display: inline;
`;
const NavigationLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: black;
`;

const CreatedByContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <Container>
      <IconsContainer>
        <a href="https://www.linkedin.com/in/israelone/" _blank="true">
          <Icon className="fab fa-linkedin-in"> </Icon>
        </a>
        <a href="https://github.com/israelone">
          <Icon className="fab fa-github"></Icon>
        </a>
      </IconsContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="#home">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#about">About</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#skills">Skills</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Resume</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#projects">Portfolio</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#contact">Contact</NavigationLink>
        </NavigationItem>
      </NavigationList>
      <CreatedByContainer>
        <Paragraph>Created By:</Paragraph>
        <Logo width="50px" height="50px" />
      </CreatedByContainer>
    </Container>
  );
};

export default Footer;
