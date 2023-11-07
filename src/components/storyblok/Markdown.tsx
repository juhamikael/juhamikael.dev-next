"use client";
import React, { ImgHTMLAttributes, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as syntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rangeParser from "parse-numeric-range";
import CopyCodeButton from "./CopyCodeButton";
// Importing supported languages
import {
  jsx,
  tsx,
  typescript,
  scss,
  bash,
  markdown,
  json,
} from "react-syntax-highlighter/dist/cjs/languages/prism";

// Registering languages for syntax highlighting
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

interface ElementData {
  meta?: string;
  [key: string]: any;
}

const MarkdownComponent = ({
  content,
  show_line_numbers,
}: {
  content: string;
  show_line_numbers: boolean;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  const ImageRenderer = ({
    src,
    alt,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) {
      return null;
    }

    return (
      <Image
        src={src}
        alt={alt || "Image"}
        layout="responsive"
        width={400}
        height={300}
        onClick={() => {
          setSelectedImageSrc(src);
          setOpen(true);
        }}
        className="cursor-pointer rounded-xl my-6"
      />
    );
  };

  return (
    <>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ImageRenderer,
          code({ node, className, ...props }) {
            const hasLang = /language-(\w+)/.exec(className || "");
            const hasMeta = (node?.data as ElementData)?.meta;

            const applyHighlights = (lineNumber: number) => {
              if (hasMeta) {
                const RE = /{([\d,-]+)}/;
                const metadata = hasMeta?.replace(/\s/g, "") ?? "";
                const strlineNumbers = RE.test(metadata)
                  ? RE.exec(metadata)?.[1]
                  : "0";

                const highlightLines = rangeParser(strlineNumbers ?? "");
                return highlightLines.includes(lineNumber) ? "highlight" : "";
              }
              return "";
            };

            const style = syntaxStyle;

            const content =
              typeof props.children === "string"
                ? props.children.trim()
                : Array.isArray(props.children)
                ? props.children.join("").trim()
                : "";

            return hasLang ? (
              <div className="relative group">
                <div className="absolute right-2 top-2 z-10">
                  <CopyCodeButton code={content} />
                </div>
                <SyntaxHighlighter
                  style={style}
                  language={hasLang[1]}
                  PreTag="div"
                  showLineNumbers={show_line_numbers}
                  wrapLines={true}
                  useInlineStyles={true}
                  lineProps={(lineNumber) => ({
                    style: { display: "block", width: "100%" },
                    className: applyHighlights(lineNumber),
                  })}
                  customStyle={{
                    whiteSpace: "pre-wrap",
                    overflowX: "auto",
                    position: "relative",
                    borderRadius: "0.5em",
                    backgroundColor: "#2d2d2d",
                  }}
                >
                  {content}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props} />
            );
          },

          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >
        {content}
      </Markdown>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={selectedImageSrc}
            alt="Full size"
            layout="responsive"
            width={800}
            height={600}
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default MarkdownComponent;
