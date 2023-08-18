import { FC } from "react";
import StraightLine from "./StraightLine";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";

interface FooterProps {
  prop?: string;
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-5 ">
      <StraightLine opacity="border-card-foreground/10" />
      <div className="text-center flex justify-center ">
        <div>
          <div>&copy; Juha Mikael {year}</div>
          <Link
            className="hover:text-primary font-black flex items-center justify-center"
            href="/contact"
          >
            Contact
            <BiMailSend className="inline-block ml-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
