import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo/logo";

const Nav = styled.nav`
  position: fixed;
  background-color: #094067;
  width: 100%;
  top: 0;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  -webkit-box-shadow: -2px 0px 6px 0px #000000;
  box-shadow: -2px 0px 6px 0px #000000;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavigationLink = styled.a`
  padding: 15px;
  display: block;
  color: white;
  text-decoration: none;
`;

const NavigationItem = styled.li`
  &:hover {
    background-color: #3da9fc;
  }
`;

const NavBar = () => {
  return (
    <Nav id="navbar">
      <Container>
        <Logo
          width="50px"
          height="50px"
          color="#ffffff"
          style={{ marginLeft: "50px" }}
        />
        <NavigationList>
          <NavigationItem>
            <NavigationLink href="#welcome-section" rel="tag" target="_blank">
              Home
            </NavigationLink>
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
      </Container>
    </Nav>
  );
};

export default NavBar;
