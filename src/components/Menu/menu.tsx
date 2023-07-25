/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import hamburguerIcon from "./assets/menuIcon.png";

export const Menu: React.FC<MenuProps> = () => {
  function scrollToSection(id: string) {
    let section = document.querySelector(`#${id}`) as Element | null | any;

    if (section !== null) {
      window.scrollTo({ top: section.offsetTop - 10, behavior: "smooth" });
    }
  }

  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-row-reverse md:flex-row justify-between w-full max-w-[80%]">
        <div className="block md:hidden w-full max-w-[30px] bg-main rounded p-1">
          <img src={hamburguerIcon} alt="" style={{ filter: "invert(100%)" }} />
        </div>
        <div css={hamburguerOptions} className="hidden md:flex items-center gap-6">
          <p css={menuItem}>Home</p>
          <span css={ball} className="bg-main"></span>
          <p
            css={menuItem}
            onClick={() => {
              scrollToSection("aboutMe");
            }}
          >
            About Me
          </p>
          <span css={ball} className="bg-main"></span>
          <p
            css={menuItem}
            onClick={() => {
              scrollToSection("skills");
            }}
          >
            Skills
          </p>
          <span css={ball} className="bg-main"></span>
          <p
            css={menuItem}
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            Projects
          </p>
        </div>
        <p
          css={contactMe}
          className="text-white font-medium bg-main px-3 py-1 rounded-lg cursor-pointer"
          onClick={() => {
            scrollToSection("contactMe");
          }}
        >
          Contact Me
        </p>
      </div>
    </div>
  );
};

interface MenuProps {}

const ball = css`
  min-height: 7px;
  max-height: 7px;
  min-width: 7.5px;
  max-width: 7.5px;
  border-radius: 50%;
`;

const menuItem = css`
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: var(--main);
    transition: width 0.3s;
  }

  :hover::after {
    width: 100%;
  }
`;

const contactMe = css`
  transition: all 0.2s;
  :hover {
    background-color: #ececec;
    color: var(--main);
  }
`;

const hamburguerOptions = css`
`;
