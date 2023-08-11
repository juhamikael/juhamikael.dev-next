import { FC } from "react";

interface IProjectsProps {
  prop?: string;
  children?: React.ReactNode;
}

const ProjectsPage: FC<IProjectsProps> = ({}) => {
  return (
    <div>
      <div>projects</div>
    </div>
  );
};

export default ProjectsPage;
