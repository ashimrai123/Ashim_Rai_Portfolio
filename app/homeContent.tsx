import React from "react";
import Header from "./components/header/page";
import Hero from "./components/hero/page";

const HomeContent = () => {
  return (
    <>
      <div className=" font-mono bg-stone-950">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default HomeContent;
