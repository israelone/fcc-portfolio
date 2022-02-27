import "./App.css";
import About from "./Components/About/about";
import NavBar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./Components/Home/home";
import Skills from "./Components/Skills/skills";
import Footer from "./Components/Footer/footer";

const Button = styled.button`
  &:hover {
    background-color: black;
  }
  color: white;
  border-radius: 4px;
  position: fixed;
  width: 50px;
  height: 50px;
  border: none;
  top: 10px;
  right: 25px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.28);
`;

const GoBackTopButton = styled(Button)`
  position: fixed;
  top: initial;
  bottom: 20px;
`;

const App = () => {
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setCurrentView(e.path[1].scrollY);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      {currentView !== 0 && (
        <GoBackTopButton
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fas fa-chevron-up"
        ></GoBackTopButton>
      )}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
