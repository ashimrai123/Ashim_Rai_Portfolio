"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { IoCopy, IoCheckmark } from "react-icons/io5";
import { Button } from "../ui/button";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ashrai14691@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card className="flex flex-col gap-5 p-5">
      <div className="flex items-center gap-2">
        <Dot className="w-5 h-5" />
        <span className="text-lg">Contact</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm md:text-base mb-4 md:mb-0">
          ashrai14691@gmail.com
        </p>

        <Button
          onClick={handleCopy}
          className="flex items-center gap-2"
          variant={"outline"}
        >
          {copied ? (
            <>
              <IoCheckmark className="w-5 h-5" />
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <IoCopy className="w-5 h-5" />
              <span className="hidden sm:inline">Copy Email</span>
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default Contact;
