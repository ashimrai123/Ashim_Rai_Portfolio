"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs } from "@/data/data";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RiSendPlane2Fill } from "react-icons/ri";

interface PageProps {
  params: {
    blogId: string;
  };
}

const BlogDetails = ({ params }: PageProps) => {
  const blogId = params.blogId;

  const blog = blogs.find((blog) => blog.id === blogId);

  return (
    <>
      <MaxWidthWrapper className="mt-10 sm:mt-12">
        <div className="grid  gap-8">
          <Card className="flex flex-col gap-5 font-semibold">
            <div className="flex">
              <Dot />
              <Link href={"/blogs"} className="pr-1">
                Blogs{" "}
              </Link>{" "}
              / {blog?.title}
            </div>
            <div className="rounded-xl">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  src={blog!.img}
                  alt={blog!.title}
                  fill
                  className="absolute inset-0 rounded-lg object-cover"
                />
              </div>
            </div>
            <p className="text-2xl">{blog?.title}</p>
            <p>by {blog?.author}</p>
            <p>{blog?.date}</p>
          </Card>
          <Card className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-5">
              {blog?.content.map((paragraph) => (
                <p key={blog.id}>{paragraph}</p>
              ))}
            </div>
          </Card>
          <Card className=" p-5">
            <div className="flex">
              <Dot />
              <h3 className="text-base font-semibold mb-4">Leave a Comment</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-[95%]">
                <textarea
                  id="comment"
                  placeholder="Write your comment here"
                  className="mt-1 block w-full rounded-lg p-2 resize-none text-sm"
                  rows={2}
                ></textarea>
              </div>
              <Button type="submit">
                <RiSendPlane2Fill />
              </Button>
            </div>
          </Card>

          <Card className="">
            <div className="flex">
              <Dot />
              <p className="text-base font-semibold">Comments</p>
            </div>
            <p>
              {blog?.comments.map((comment, index) => (
                <div
                  className="flex gap-5 items-center py-5 border-b-2"
                  key={index}
                >
                  <div className="size-8 rounded-full dark:bg-gray-400 bg-gray-800"></div>
                  <div className=" border-2 w-full px-5 py-4 rounded-lg">
                    <p className="">{comment.text}</p>
                    <p className="text-xs">{comment.date}</p>
                  </div>
                </div>
              ))}
            </p>
          </Card>
          <Card className=" flex flex-col gap-5">
            <div className="flex font-semibold">
              <Dot />
              <p>Similar blogs</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-h-96 overflow-y-auto scrollbar-thin ">
              {blogs.map((blog) => (
                <>
                  <Link
                    href={"/blogs/" + blog.id}
                    className="relative w-full pb-[56.25%]"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="rounded-xl"
                    />
                  </Link>
                  <Link href={"/blogs/" + blog.id}>{blog.title}</Link>
                </>
              ))}
            </div>
          </Card>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default BlogDetails;
