/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  whiteTitle,
  purpleTitle,
  hasSpace = true,
  reverse = false,
  subtitle,
}) => {
  return (
    <div className="text-white">
      <div className="flex justify-center relative">
        <p className="text-[50px] font-bold">
          {whiteTitle}
          {hasSpace ? " " : ""}
          <span className="text-main">{purpleTitle}</span>
        </p>
        <div
          css={pointedLine}
          style={reverse ? { right: "110%" } : { left: "105%" }}
        ></div>
      </div>
      {subtitle && (
        <p style={{ marginTop: "-5px" }} className="text-[#c2c2c2]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface SectionTitleProps {
  whiteTitle: string;
  purpleTitle: string;
  hasSpace?: boolean;
  reverse?: boolean;
  subtitle?: string;
}

const pointedLine = css`
  position: absolute;
  bottom: 47%;
  width: 50vw;
  height: 10px;

  background-image: linear-gradient(
    to right,
    var(--main) 60%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 28px 3px;
  background-repeat: repeat-x;
`;
