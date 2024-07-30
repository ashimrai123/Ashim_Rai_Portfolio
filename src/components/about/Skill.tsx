import React from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { Progress } from "../ui/progress";
import { languages, skills } from "@/data/data";

const Skill = () => {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <div className="flex items-center mb-4">
        <Dot />
        <div className="ml-2 font-semibold text-xl">Skill</div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h1 className="text-xl mb-4">Programming Skills</h1>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl mb-4">Language Skills</h1>
          {languages.map((language, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{language.name}</span>
                <span>{language.level}%</span>
              </div>
              <Progress value={language.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Skill;
