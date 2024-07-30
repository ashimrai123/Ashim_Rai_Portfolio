import { Dot } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <>
      <Card className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Dot />
            <p className="text-lg ">Blogs</p>
          </div>
          <Link
            href={"/blogs"}
            className={cn(buttonVariants({ variant: "outline" }), "")}
          >
            <p>View All &rarr;</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {/* Dynamic Routing Here for each blog */}
          <Link
            href={"/blogs/1"}
            className="flex items-center justify-between bg-secondary dark:bg-secondary rounded-xl px-4 py-2 "
          >
            <div className="flex flex-col ">
              <h1>Speech Emotion Recognition</h1>
              <p>Machine Learning</p>
            </div>
            <FaChevronRight />
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Blogs;
