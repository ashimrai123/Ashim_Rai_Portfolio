import React from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { experience } from "@/data/data";

const Experience = () => {
  return (
    <Card className="flex flex-col gap-5 ">
      <div className="flex items-center gap-2">
        <Dot />
        <p className="ml-2 text-lg">Experience</p>
      </div>
      <div className="max-h-[400px] lg:flex-auto overflow-y-scroll scrollbar-thin">
        <div className="pt-2 flex flex-col gap-5">
          {experience.map((item, index) => (
            <Timeline
              key={index}
              time={item.time}
              title={item.title}
              company={item.company}
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
  company: string;
  detail: string;
}

const Timeline: React.FC<TimelineProps> = ({
  time,
  title,
  company,
  detail,
}) => (
  <ul className="flex flex-col md:flex-row relative border-b border-stone-200 dark:border-stone-700 list-none ">
    <li className=" ">
      <div>
        <p className="text-base font-semibold text-stone-900 dark:text-white">
          {title}
        </p>
        <p>{company}</p>
      </div>

      <p className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-secondary-foreground dark:bg-muted-foreground rounded-md">
        {time}
      </p>
      <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
        {detail}
      </p>
    </li>
  </ul>
);

export default Experience;
