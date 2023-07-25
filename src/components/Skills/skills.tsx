/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SectionTitle } from "../SectionTitle";
import { SkillCard } from "../SkillCard";

import reactLogo from "./assets/reactLogo.png";
import javascriptLogo from "./assets/javascriptLogo.png";
import typescriptLogo from "./assets/typescriptLogo.png";
import cssLogo from "./assets/cssLogo.png";
import htmlLogo from "./assets/htmlLogo.png";
import tailwindLogo from "./assets/tailwindLogo.png";
import emotionLogo from "./assets/emotionLogo.png";
import styledComponentslogo from "./assets/styledComponentsLogo.png";
import sassLogo from "./assets/sassLogo.png";

import cLogo from "./assets/cLogo.png";
import javaLogo from "./assets/javaLogo.png";
import pythonLogo from "./assets/pythonLogo.png";

import jiraLogo from "./assets/jiraLogo.png";
import gitLogo from "./assets/gitLogo.png";
import figmaLogo from "./assets/figmaLogo.png";

export const Skills: React.FC<SkillsProps> = () => {
  return (
    <div
      id="skills"
      className="flex flex-col w-full justify-center items-center mt-10 overflow-hidden"
    >
      <SectionTitle
        whiteTitle="Skill"
        purpleTitle="s"
        hasSpace={false}
        reverse={true}
      />
      <div className="mt-10 flex gap-14 flex-col lg:flex-row">
        <div>
          <p className="text-white font-semibold text-[25px] mb-4">Web</p>
          <div
            css={webSkillsMedia}
            className="grid justify-items-center grid-rows-3 grid-cols-3 gap-3"
          >
            <SkillCard title="HTML" logo={htmlLogo}></SkillCard>
            <SkillCard title="JavaScript" logo={javascriptLogo}></SkillCard>
            <SkillCard title="React" logo={reactLogo}></SkillCard>
            <SkillCard title="TypeScript" logo={typescriptLogo}></SkillCard>
            <SkillCard title="CSS" logo={cssLogo}></SkillCard>
            <SkillCard title="TailwindCSS" logo={tailwindLogo}></SkillCard>
            <SkillCard
              title="Styled Components"
              logo={styledComponentslogo}
            ></SkillCard>
            <SkillCard title="EmotionCSS" logo={emotionLogo}></SkillCard>
            <SkillCard title="SASS" logo={sassLogo}></SkillCard>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-10">
          <div>
            <p className="text-white font-semibold text-[25px] mb-4">
              Programming
            </p>
            <div className="flex gap-3 flex-wrap justify-center items-center">
              <SkillCard title="Python" logo={pythonLogo}></SkillCard>
              <SkillCard title="C | C# | C++" logo={cLogo}></SkillCard>
              <SkillCard title="Java" logo={javaLogo}></SkillCard>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold text-[25px] mb-4">Tools</p>
            <div className="flex gap-3 flex-wrap justify-center items-center">
              <SkillCard title="Figma" logo={figmaLogo}></SkillCard>
              <SkillCard title="Jira" logo={jiraLogo}></SkillCard>
              <SkillCard title="Git" logo={gitLogo}></SkillCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkillsProps {}

const webSkillsMedia = css`
  @media (max-width: 510px) {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
