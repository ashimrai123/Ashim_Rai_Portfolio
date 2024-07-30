import React from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { education } from "@/data/data";

const Education = () => {
  return (
    <Card className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Dot />
        <p className="ml-2 text-lg">Education</p>
      </div>
      <div className="max-h-[400px] lg:flex-auto overflow-y-scroll scrollbar-thin">
        <div className="pt-2">
          {education.map((item, index) => (
            <Timeline
              key={index}
              time={item.time}
              title={item.title}
              college={item.college}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

interface TimelineProps {
  time: string;
  title: string;
  college: string;
  detail: string;
}

const Timeline: React.FC<TimelineProps> = ({
  time,
  title,
  college,
  detail,
}) => (
  <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
      <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
        <span className="text-lg font-semibold text-stone-900 dark:text-white">
          {title}
        </span>
        <span className="inline-block px-2 py-1 font-semibold text-white bg-secondary-foreground dark:bg-muted-foreground dark:text-black rounded-md">
          {time}
        </span>
      </p>
      <p>{college}</p>
      <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
        {detail}
      </p>
    </li>
  </ol>
);

export default Education;
