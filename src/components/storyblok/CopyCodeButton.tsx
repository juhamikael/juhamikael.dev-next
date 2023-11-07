"use client";
import React, { useState } from "react";
import {
  // Copy button
  AiOutlineCopy,
} from "react-icons/ai";
const CopyCodeButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button onClick={handleCopy} className="copy-code-button flex items-center">
      {isCopied ? "Copied!" : "Copy"}
      <AiOutlineCopy className="ml-2" />
    </button>
  );
};

export default CopyCodeButton;
