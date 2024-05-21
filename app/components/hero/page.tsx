import React from "react";
import Link from "next/link";
import style from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={`${style.hero} flex items-center md:px-16  py-10`}>
        <div className={` text w-1/2   `}>
          {" "}
          <p
            className={`  text-4xl text-black bg-white inline hover:text-white hover:bg-red-900 duration-200 cursor-default `}
          >
            Hi There, I am Ashim Rai
          </p>
          <p className="text-4xl text-white ">A Full Stack Developer </p>
          <Link
            href={
              "https://drive.google.com/file/d/1X1YLlvuQZNY684XsKc_AdEwBWihq_9VA/view?usp=drive_link"
            }
            target="_blank"
            className="text-white font-bold py-5 px-12 my-16 border-white border-4 inline-block hover:bg-white hover:text-black duration-75 "
          >
            View CV
          </Link>
          <div className="socials flex flex-wrap text-white items-center gap-4  ">
            <Link
              href={"https://github.com/ashimrai123"}
              className="p-3 font-bold bg-white hover:text-white hover:bg-transparent  duration-150  text-black w-28 justify-center flex "
            >
              GitHub
            </Link>
            <Link
              href={"https://leetcode.com/u/ashim_raibs/"}
              className="p-3 font-bold bg-orange-500 text-black hover:text-orange-800 hover:bg-orange-200  duration-150  w-28 justify-center flex "
            >
              LeetCode
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ashim-rai-a90857198/"}
              className="p-3 font-bold bg-blue-800 hover:text-blue-800 hover:bg-blue-100 w-28 duration-150 justify-center flex "
            >
              LinkedIn
            </Link>
            <Link
              href={"https://www.facebook.com/ashim.bantawa/"}
              className="p-3 font-bold bg-blue-900 hover:bg-blue-200 hover:text-blue-900 w-28 duration-150 justify-center flex"
            >
              Facebook
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCzPeNkKH86i0BZXWsr-mIlw"}
              className="p-3 font-bold bg-red-800 hover:bg-red-100 hover:text-red-800 w-28 duration-150 justify-center flex"
            >
              Youtube
            </Link>
            <Link
              href={"https://www.instagram.com/ashim_raibs/"}
              className="p-3 font-bold bg-orange-600 hover:bg-orange-100 hover:text-orange-600 w-28 duration-150 justify-center flex"
            >
              Instagram
            </Link>
          </div>
        </div>
        <img
          className="image bg-blue-800 w-1/2 rounded-3xl"
          src="/AshimRai.jpeg"
          alt="Ashim Rai image"
        />
      </section>
    </>
  );
};

export default Hero;
