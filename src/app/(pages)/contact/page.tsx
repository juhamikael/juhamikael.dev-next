import { FC } from "react";

import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";

export const metadata: Metadata = {
  title: title.contact,
  description: description.contact,
  keywords: keywords.contact,
};

const ContactPage = ({}) => {
  return (
    <div>
      <div>contact</div>
    </div>
  );
};

export default ContactPage;
