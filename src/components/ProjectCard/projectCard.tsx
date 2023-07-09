/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  thumb,
  description,
  children,
  href,
}) => {
  return (
    <div
      className="text-white bg-[#402750] rounded-lg w-[300px] h-[405px] flex flex-col justify-start items-start gap-2 p-2 cursor-pointer hover:scale-105 duration-75"
      onClick={() => {
        window.open(href);
      }}
    >
      <img className="w-full rounded-lg" src={thumb} alt="" />
      <div className="flex flex-col gap-2 text-left px-3">
        <p className="font-semibold text-[22px]">{title}</p>
        <p className="font-light text-[14px]">{description}</p>
        <p className="font-semibold text-[18px] mt-2">Technologies</p>
        <div css={logosStyle} className="flex gap-1">
          {children}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  thumb: string;
  title: string;
  description: string;
  children: React.ReactNode;
  href: string;
}

const logosStyle = css`
  img {
    max-width: 20px;
    width: 100%;
  }
`;
