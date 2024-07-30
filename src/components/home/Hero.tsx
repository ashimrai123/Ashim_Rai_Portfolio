import Image from "next/image";
import { Card } from "../ui/card";
import { Dot, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <Card className="flex flex-col gap-5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dot />
          <p className="ml-2 text-lg ">Full Stack Enthusiast</p>
        </div>
        <div className="flex items-center font-bold sm:bg-green-100 text-green-700 dark:text-green-600 dark:bg-green-950/30 text-xs tracking-tight rounded-full sm:pr-4">
          <Dot className="animate-pulse size-10" />
          <p className="hidden sm:flex sm:ml-1">AVAILABLE FOR WORK</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="flex flex-col gap-4  md:text-left">
          <h1 className="text-lg md:text-2xl  font-bold leading-tight">
            I&apos;m Ashim Rai
          </h1>
          <p className="">I am a passionate learner and dedicated developer.</p>
          <Link
            href={"/contact"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "group max-w-44 overflow-hidden  flex justify-around "
            )}
          >
            <p className=" hidden lg:flex  group-hover:hidden  justify-between w-full">
              Want to work together?
            </p>
            <p className="  group-hover:flex lg:hidden  w-full duration-1000 transition-all items-center">
              Get in touch now
            </p>
            <Send className="lg:-translate-x-10 lg:translate-y-10 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 transition-all duration-300 ease-out " />
          </Link>
        </div>
        <div className="  relative flex items-center justify-center order-first lg:order-none ">
          <Image
            src="/Ashim.jpeg"
            alt="Profile Pic"
            className="rounded-full object-cover"
            height={200}
            width={200}
          />
        </div>
      </div>
    </Card>
  );
};

export default Hero;
