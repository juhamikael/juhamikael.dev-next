import React, { FC } from "react";
interface IStarightLineProps extends React.HTMLAttributes<HTMLDivElement> {}

const StraightLine: FC<IStarightLineProps> = ({ className }) => {
  return (
    <div
      className={`border-b border-card-foreground/40 my-2 ${className}`}
    ></div>
  );
};

export default StraightLine;
