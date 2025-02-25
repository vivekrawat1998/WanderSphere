import React from "react";

type FeatureCardProps = {
  subText: string;
  mainText: string;
  Icon: React.FC;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  subText,
  mainText,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-5xl">
        <Icon />
      </div>
      <h2 className="font-bold text-xl text-center text-green">{mainText}</h2>
      <h3 className="text-center text-gray">{subText}</h3>
    </div>
  );
};

export default FeatureCard;
