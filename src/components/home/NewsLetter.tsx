import React from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";

const NewsLetter: React.FC = () => {
  return (
    <Card className="flex flex-col gap-5 p-5">
      <div className="flex items-center gap-2">
        <Dot className="w-5 h-5" />
        <span className="text-lg ">Newsletter</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-grow p-2 rounded-md border border-gray-300 w-full md:w-auto"
        />
        <Button className="w-full md:w-auto">Subscribe</Button>
      </div>
    </Card>
  );
};

export default NewsLetter;
