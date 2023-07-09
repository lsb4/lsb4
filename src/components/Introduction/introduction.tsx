/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import image from "./assets/image.png";
import curriculo from "./assets/curriculo.pdf";
import resume from "./assets/resume.pdf";

export const Introduction: React.FC<IntroductionProps> = () => {
  function scrollToSection(id: string) {
    let section = document.querySelector(`#${id}`) as Element | null | any;

    if (section !== null) {
      window.scrollTo({ top: section.offsetTop - 10, behavior: "smooth" });
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-[75vh]">
      <div className="flex justify-between items-center w-full max-w-[75%] mt-20">
        <div className="text-left">
          <p className="text-white text-[80px] leading-[5.5rem]">
            Hey, <br /> I am <span className="bg-main px-3">Lucas</span>
          </p>
          <div className="inline-flex items-center">
            <p css={typing} className="text-[#b4b4b4] text-[35px] mt-3">
              Front-End Developer
            </p>
            <span className="text-[#b4b4b4] text-[35px] mt-3" css={blinking}>
              |
            </span>
          </div>
          <div className="flex gap-8 mt-3">
            <p
              css={introButton}
              onClick={() => {
                scrollToSection("aboutMe");
              }}
            >
              Explore
            </p>
            <a href={curriculo} download="curriculo.pdf" css={introButton}>
              Download CV | PT
            </a>
            <a href={resume} download="resume.pdf" css={introButton}>
              Download CV | EN
            </a>
          </div>
        </div>
        <div css={fading}>
          <img
            className="w-full"
            style={{ maxWidth: "600px" }}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

interface IntroductionProps {}

const introButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;
  border: 2px solid var(--main);
  border-radius: 7px;
  padding: 3px 10px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    border-color: var(--main);
    color: var(--main);
  }
`;

const typing = css`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  animation: type 4s steps(60, end);

  @keyframes type {
    from {
      width: 0;
    }
  }
`;

const blinking = css`
  animation: blink 0.8s infinite;

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;

const fading = css`
  border-radius: 50%;
  display: inline-block;
  position: relative;

  img {
    border-radius: 50%;
    display: block;
    border: 1px solid #171717;
  }

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0) 0%,
      #171717 70%,
      #171717 100%
    );
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
