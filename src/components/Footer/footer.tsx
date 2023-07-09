import githubLogo from "./assets/githubLogo.png";
import whatsappLogo from "./assets/whatsappLogo.png";
import linkedinLogo from "./assets/linkedinLogo.png";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div id="contactMe" className="flex flex-col w-full justify-center items-center mt-10 mb-14">
      <p className="text-white text-[40px] font-semibold mb-3">
        Contact <span className="text-main">Me</span>
      </p>
      <div className="flex justify-center items-center gap-4">
        <img
          className="w-full max-w-[50px] cursor-pointer hover:scale-105 duration-75"
          src={whatsappLogo}
          alt=""
          onClick={() => {
            window.open("https://api.whatsapp.com/send?phone=5581994167572");
          }}
        />
        <img
          className="w-full max-w-[50px] cursor-pointer hover:scale-105 duration-75"
          src={linkedinLogo}
          alt=""
          onClick={() => {
            window.open("https://www.linkedin.com/in/lsb4");
          }}
        />
        <img
          className="w-full max-w-[50px] cursor-pointer hover:scale-105 duration-75"
          src={githubLogo}
          alt=""
          onClick={() => {
            window.open("https://github.com/lsb4");
          }}
        />
      </div>
    </div>
  );
};

interface FooterProps {}
