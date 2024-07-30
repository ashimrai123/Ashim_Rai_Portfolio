import Blogs from "@/components/blogs/Blogs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const blogPage = () => {
  return (
    <MaxWidthWrapper className="pt-10 sm:pt-12  ">
      <Blogs />
    </MaxWidthWrapper>
  );
};

export default blogPage;
