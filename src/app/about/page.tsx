import About from "@/components/about/About";
import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import Intrest from "@/components/about/Interest";
import Knowledge from "@/components/about/Knowledge";
import Skill from "@/components/about/Skill";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const aboutPage = () => {
  return (
    <>
      <MaxWidthWrapper className="pt-10 sm:pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <div className="lg:col-span-2">
            <About />
          </div>
          <div className="">
            <Experience />
          </div>
          <div className="lg:col-span-2 ">
            <Skill />
          </div>

          <div className="">
            <Education />
          </div>
          <Knowledge />
          <Intrest />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default aboutPage;
