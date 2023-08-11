import { FC } from "react";

interface IMusicProps {
  prop?: string;
  children?: React.ReactNode;
}

const MusicPage: FC<IMusicProps> = ({}) => {
  return (
    <div>
      <div>music</div>
    </div>
  );
};

export default MusicPage;
