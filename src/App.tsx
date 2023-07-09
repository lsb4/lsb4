/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Introduction } from "./components/Introduction";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import arrow from "./arrowTop.png";

function App() {
  return (
    <div className="App relative">
      <Menu />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />

      <div
        css={arrowTop}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default App;

const arrowTop = css`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 40px;
  right: 50px;

  background-color: var(--main);
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;

  transition: all 0.2s;

  img {
    filter: invert(100%);
    width: 100%;
    max-width: 30px;
    transition: all 0.2s;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  :hover {
    img {
      transform: scale(1.1);
      animation-name: bounce;
      animation-timing-function: ease;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
