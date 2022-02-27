import React from "react";
import styled from "styled-components";

const Container = styled.section`
  font-size: 25px;
  background: linear-gradient(
    125deg,
    #ecfcff 0%,
    #ecfcff 40%,
    #b2fcff calc(40% + 1px),
    #b2fcff 60%,
    #5edfff calc(60% + 1px),
    #5edfff 72%,
    #3e64ff calc(72% + 1px),
    #3e64ff 100%
  );

  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 98px;
  height: 87px;
`;

const Paragraph = styled.p`
  font-style: italic;
  margin: 0;
  font-weigth: 300;
  font-size: 18px;
`;

const Header = styled.h1`
  margin: 0;
  letter-spacing: 7px;
  font-family: "Teko", sans-serif;
  color: #094067;
`;

const Button = styled.button`
  margin: 17px 0;
  border: 2px solid #094067;
  padding: 17px;
  font-size: 20px;
  background-color: #fffffe;
  color: #094067;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <Container id="welcome-section">
      <Header>Israel Lopez</Header>
      <Paragraph>Front End Developer</Paragraph>
      <Button>
        <a
          id="profile-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/israelone"
          style={{ textDecoration: "none", color: "#094067" }}
        >
          Github Profile
        </a>
      </Button>
    </Container>
  );
};

export default Home;
