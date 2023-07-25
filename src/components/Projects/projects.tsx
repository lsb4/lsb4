/* eslint-disable @typescript-eslint/no-unused-vars */

import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "../ProjectCard";

// Não estou usando todas as imagens, mas vou deixar elas já importadas para o caso de adicionar novos projetos
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

import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div id="projects" className="flex flex-col w-full justify-center items-center mt-14 overflow-hidden">
      <SectionTitle
        whiteTitle="Project"
        purpleTitle="s"
        subtitle="Some of my projects"
        hasSpace={false}
      />
      <div className="flex justify-center items-center flex-wrap gap-12 mt-12 mb-4">
        <ProjectCard
          href="https://github.com/lsb4/Contador-DevChallenge"
          title="Contador de Dias"
          thumb={project1}
          description="DevChallenge counter challenge. You put a date and it tells you how much time is left, from the current day to the proposed date. I made some adaptations, but overall the final project was very similar to the proposed one."
        >
          <img src={htmlLogo} alt="" />
          <img src={cssLogo} alt="" />
          <img src={javascriptLogo} alt="" />
        </ProjectCard>

        <ProjectCard
          href="https://github.com/lsb4/Crud-ReactJS"
          title="React CRUD"
          thumb={project2}
          description="A basic CRUD ( Create / Read / Update / Delete ) application that I made while learning React, to practice my skills."
        >
          <img src={reactLogo} alt="" />
          <img src={cssLogo} alt="" />
          <img src={javascriptLogo} alt="" />
          <img src={htmlLogo} alt="" />
        </ProjectCard>
      </div>
    </div>
  );
};

interface ProjectsProps {}
