import { FC } from "react";

interface IBlogProps {
  prop?: string;
  children?: React.ReactNode;
}

const BlogPage: FC<IBlogProps> = ({}) => {
  return (
    <div>
      <div>blog</div>
    </div>
  );
};

export default BlogPage;
