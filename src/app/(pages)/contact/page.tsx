import { FC } from "react";

interface IContactProps {
  prop?: string;
  children?: React.ReactNode;
}

const ContactPage: FC<IContactProps> = ({}) => {
  return (
    <div>
      <div>contact</div>
    </div>
  );
};

export default ContactPage;
