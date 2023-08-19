import ContactForm from "@/components/ContactForm";

import { keywords, description, title } from "@/app/seo/baseMetadata";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: title.contact,
  description: description.contact,
  keywords: keywords.contact,
};

const ContactPage = ({}) => {
  return <ContactForm />;
};

export default ContactPage;
