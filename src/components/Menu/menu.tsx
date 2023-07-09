/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex justify-between w-full max-w-[80%]">
        <div className="flex items-center gap-6">
          <p css={menuItem}>Home</p>
          <span css={ball} className="bg-main"></span>
          <p css={menuItem}>About Me</p>
          <span css={ball} className="bg-main"></span>
          <p css={menuItem}>Skills</p>
          <span css={ball} className="bg-main"></span>
          <p css={menuItem}>Projects</p>
        </div>
        <p
          css={contactMe}
          className="text-white font-medium bg-main px-3 py-1 rounded-lg cursor-pointer"
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
    background: #b000fa;
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
    color: #b000fa;
  }
`;
