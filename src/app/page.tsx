import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import NewsLetter from "@/components/home/NewsLetter";
import Socials from "@/components/home/Socials";
import Works from "@/components/home/Works";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="pt-10 sm:pt-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          <Hero />
          <div className="sm:row-span-2">
            <Blogs />
          </div>
          <Socials />
          <div className="sm:row-span-2">
            <Works />
          </div>
          <Contact />
          <NewsLetter />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
