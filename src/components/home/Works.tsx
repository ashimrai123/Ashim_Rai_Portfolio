"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import Image from "next/image";
import { projects } from "@/data/data";

const Works: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  return (
    <Card className="flex flex-col gap-5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dot />
          <p className="text-lg ">Works</p>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={handlePrev} className="p-2">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="p-2">
            <FaChevronRight />
          </button>
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline" }), "")}
          >
            <p>View All &rarr;</p>
          </Link>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="h-60 w-full bg-gray-400 rounded-lg text-black flex items-center justify-center text-3xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                src={project.thumbnail}
                alt={project.title}
                className="object-cover rounded-lg"
                fill
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {project.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default Works;
