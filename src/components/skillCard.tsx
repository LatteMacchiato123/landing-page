import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icons: { icon: JSX.Element; tooltip: string }[];
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icons,
}) => {
  return (
    <div className="card bg-base-100 w-72 shadow-xl m-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap justify-left mt-4  gap-y-2">
          {icons.map((iconObj, index) => (
            <div key={index} className="tooltip" data-tip={iconObj.tooltip}>
              <div className="w-6 h-6 mx-2 transition-transform transform hover:scale-110">
                {iconObj.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
