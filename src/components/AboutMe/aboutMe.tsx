/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle } from "../SectionTitle";

import image from "./assets/image.jpeg";
import curriculo from "./assets/curriculo.pdf";
import resume from "./assets/resume.pdf";

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-col w-full justify-center items-center mt-7 overflow-hidden"
    >
      <SectionTitle
        whiteTitle="About"
        purpleTitle="Me"
        subtitle="Let me introduce myself"
      />
      <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-10 w-full max-w-[75%] text-white text-left mt-14">
        <div>
          <div className="flex flex-col gap-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p css={experience} className="text-[25px] font-medium">
              Professional Experience
            </p>
            <p className="text-[20px] font-medium">V-Lab ( 2022 - Present )</p>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex gap-6">
              <a href={curriculo} download="curriculo.pdf" css={introButton}>
                Download CV | PT
              </a>
              <a href={resume} download="resume.pdf" css={introButton}>
                Download CV | EN
              </a>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full max-w-[300px]"
          style={{ border: "2px solid var(--main)", borderRadius: "0 0 0 20%" }}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

interface AboutMeProps {}

const experience = css`
  ::after {
    content: "";
    display: block;
    width: 20%;
    height: 2px;
    background: var(--main);
    transition: width 0.3s;
  }
`;

const introButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
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
