import Contact from "@/components/contact/Contact";
import Detail from "@/components/contact/Detail";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const contactPage = () => {
  return (
    <MaxWidthWrapper className="mt-10 sm:mt-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        <div className="md:col-span-2">
          <Contact />
        </div>
        <div className="md:col-span-1">
          <Detail />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default contactPage;
