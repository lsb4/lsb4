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
          <div className="flex flex-col">
            <p className="mb-2">
              I am a Front-end developer with one year of professional
              experience and fully capable of creating pages/interfaces that are
              attractive and responsive. Throughout my career, I had the
              opportunity to learn and improve myself in technologies such as
              HTML, CSS, JavaScript, ReactJS, TypeScript, Tailwind CSS and
              Styled Components.
            </p>
            <p className="mb-4">
              Besides having a strong understanding of the fundamental
              principles of front-end development, I also have an ease of
              learning and adaptation, I am able to communicate clearly and
              concisely with a team and, if necessary, lead them on a project.
            </p>
            <p css={experience} className="text-[25px] font-medium mb-4">
              Professional Experience
            </p>
            <p className="text-[20px] font-medium mb-2">V-Lab ( 2022 - Present )</p>
            <p className="mb-2">
              As a front-end developer, I participate in a project in
              partnership with the MEC (Ministério da Educação), where my main
              assignment is the creation of responsive pages, using the latest
              technologies and stacks. The pages created are destined to online
              courses, with the objective of professionalizing and specializing
              several types of workers.
            </p>
            <p className="mb-6">
              Although the project is very front-end focused, many times other
              challenges appear where I have to venture into other areas, such
              as Python scripting, process optimization, image and web page
              loading optimization, back-end techniques for API usage, etc.
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
