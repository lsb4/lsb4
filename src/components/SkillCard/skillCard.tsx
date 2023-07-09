export const SkillCard: React.FC<SkillCardProps> = ({ title, logo }) => {
  return (
    <div className="text-white bg-[#402750] px-6 pt-3 pb-2 rounded-lg w-[150px] h-[120px] flex justify-center items-center flex-col gap-2">
      <img
        className="w-full max-w-[40px] hover:scale-110 duration-75"
        src={logo}
        alt=""
      />
      <p>{title}</p>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  logo: string;
}
