import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: #fffffe;
  padding: 80px 20px;
  @media only screen and (min-width: 1000px) {
    padding: 100px 260px;
  }
`;

const Header = styled.h1``;
const Introduction = styled.p`
  color: #5f6c7b;
`;

const About = () => {
  return (
    <Container id="about">
      <Header>Hello!</Header>
      <Introduction>
        My name is Israel Lopez, I'm an Enthusiastic and detail-oriented
        Front-End Developer who is comfortable working with JavaScript,
        HTML/CSS, and React looking to leverage my experience building
        responsive and scalable web apps to solve interesting problems that
        delight end-users.
      </Introduction>
    </Container>
  );
};

export default About;
