import React from "react";
import { Card } from "../ui/card";
import { ArrowDownCircle, Dot } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  //Constant
  const birthday = new Date("2000-09-22");

  const calculateAge = (birthday: Date): number => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    return monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ? age - 1
      : age;
  };

  return (
    <Card className="flex flex-col gap-5 ">
      <div className="flex items-center gap-2">
        <Dot />
        <p className="ml-2 text-lg">About Me</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 ">
        <div className="flex-shrink-0 col-span-2 md:col-span-1 relative rounded-md overflow-hidden items-center justify-center flex">
          <Image
            src="/Ashim_Rai.png"
            alt="Profile Pic"
            className="rounded-md object-cover"
            height={400}
            width={400}
          />
        </div>
        <div className=" col-span-2">
          <div className="flex flex-col justify-center ">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Ashim Rai
            </h1>
            <h3 className="text-lg md:text-xl  font-medium text-gray-600">
              Full Stack Enthusiast
            </h3>
          </div>
          <p className="text-sm md:text-base mt-3">
            I&apos;m a full-stack developer with a strong passion for Next.js.
            My journey in software development has been focused on creating
            seamless and dynamic web applications. <br />
            I&apos;m always exploring new technologies and improving my skills,
            especially in areas like React and TypeScript. Eager to learn and
            grow, I&apos;m committed to making a meaningful impact in every
            project I take on.
          </p>
        </div>

        <div className="flex justify-center col-span-2  md:col-span-1 items-center">
          <Button>
            <ArrowDownCircle className="mr-4" />
            Download Resume
          </Button>
        </div>
        <div className=" col-span-2 grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div>
            <p>
              <strong>Birthday:</strong> 09.22.2000 ({calculateAge(birthday)})
            </p>

            <p>
              <strong>Address:</strong> Lalitpur, Nepal
            </p>
          </div>
          <div>
            <p>
              <strong>Nationality:</strong> Nepali
            </p>
            <p>
              <strong>Freelance:</strong> Available
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;
