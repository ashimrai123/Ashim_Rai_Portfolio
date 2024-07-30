import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/projects/Projects";
import React from "react";

const projectPage = () => {
  return (
    <MaxWidthWrapper className="pt-10 sm:pt-12 ">
      <Projects />
    </MaxWidthWrapper>
  );
};

export default projectPage;
