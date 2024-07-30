import React from "react";
import { Card } from "../ui/card";
import { Dot, Heart } from "lucide-react";
import { interestsItems } from "@/data/data";

const Interest = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center">
        <Dot />
        <p className="text-lg ">Interest</p>
      </div>
      <div className="space-y-4 mt-2">
        {interestsItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-2 group">
            <Heart className="mt-1  group-hover:text-red-500 fill-current transition-colors duration-300" />
            <div className="flex items-center">{item}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Interest;
