"use client";
import React, { ImgHTMLAttributes, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const MarkdownComponent = ({ content }: { content: string }) => {
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
          a: ({ node, ...props }) => {
            return (
              <a {...props} target="_blank" rel="noopener noreferrer">
                {props.children}
              </a>
            );
          },
        }}
      >
        {content}
      </Markdown>
      {isOpen && (
        <div
          className="fixed inset-0  bg-black bg-opacity-50 z-50 flex justify-center items-center"
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
