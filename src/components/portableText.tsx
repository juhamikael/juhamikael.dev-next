import { PortableTextComponents } from "@portabletext/react";

const linkComponent: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          style={{
            marginTop: "5rem",
          }}
          href={value?.href}
          target="_blank"
        >
          {children}
        </a>
      );
    },
  },
};

export default linkComponent;
