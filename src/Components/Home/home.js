import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
  ${'' /* background-color: #c1c14b; */}
  height: 88vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: center;
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
  font-family: 'Teko', sans-serif;
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
    <Container>
      <Header>Israel Lopez</Header>
      <Paragraph>Front End Developer</Paragraph>
      <Button>About Me</Button>
    </Container>
  );
};

export default Home;
