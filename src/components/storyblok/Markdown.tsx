"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { proseClassName } from "@/app/styles/prose";

const MarkdownComponent = ({ content }: { content: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  // Custom renderer for images within markdown
  const ImageRenderer = ({ src, alt }) => {
    return (
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={400} // These are placeholder values
        height={300} // These are placeholder values
        onClick={() => {
          setSelectedImageSrc(src);
          setOpen(true);
        }}
        className="cursor-pointer"
      />
    );
  };

  return (
    <>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className={proseClassName}
        components={{
          img: ImageRenderer,
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
            width={800} // These are placeholder values
            height={600} // These are placeholder values
            className="cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default MarkdownComponent;
