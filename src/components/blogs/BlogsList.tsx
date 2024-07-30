"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import { blogs } from "@/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { FaComment } from "react-icons/fa6";
import { useState } from "react";

interface BlogsListProps {
  searchTerm: string;
  selectedTags: string[];
  sortOption: string;
}

const BlogsList: React.FC<BlogsListProps> = ({
  searchTerm,
  selectedTags,
  sortOption,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(blogs.length / blogsPerPage));
  };

  const getPageNumbers = () => {
    const totalPageNumbers = Math.ceil(blogs.length / blogsPerPage);
    const maxPageNumbersToShow = 3;
    let startPage, endPage;

    if (totalPageNumbers <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPageNumbers;
    } else if (currentPage <= 2) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + 1 >= totalPageNumbers) {
      startPage = totalPageNumbers - 2;
      endPage = totalPageNumbers;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
  return (
    <>
      <Card className="">
        <div className="grid md:grid-cols-2 gap-5">
          {blogs.map((blog) => (
            <>
              <Link
                href={"/blogs/" + blog.id}
                className="group relative w-full pb-[56.25%] "
              >
                <div className="bg-black/40 z-10 w-full h-full absolute rounded-lg group-hover:flex hidden justify-center items-center gap-2 md:gap-3 ">
                  <FaComment className="text-white flex size-5 sm:size-8" />
                  <p className="text-lg sm:text-3xl font-semibold text-white">
                    {/* {blog.comments.length} */}
                  </p>
                </div>
                <Image
                  src={blog.img}
                  alt={`${blog.title}`}
                  fill
                  className="rounded-lg"
                />
              </Link>
              <div className="flex flex-col gap-2">
                <Link
                  href={"/blogs/" + blog.id}
                  className="text-lg font-semibold sm:text-xl"
                >
                  {blog.title}{" "}
                </Link>
                <p className="text-xs sm:text-sm">{blog.date}</p>
                <p className="text-xs sm:text-sm">By {blog.author}</p>
                <Link
                  href={"/blogs/" + blog.id}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-32 my-2 "
                  )}
                >
                  Read more
                </Link>
              </div>
            </>
          ))}
        </div>
      </Card>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4 gap-2">
        <div className="flex gap-2">
          <Button
            onClick={firstPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg hidden sm:block ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            {"<< "}First
          </Button>
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            {"< "}Previous
          </Button>
        </div>
        <div className="flex justify-center gap-1">
          {getPageNumbers().map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === pageNumber ? "bg-gray-300" : ""
              }`}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === Math.ceil(blogs.length / blogsPerPage)
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            Next{" >"}
          </Button>
          <Button
            onClick={lastPage}
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
            className={`px-3 py-1 rounded-lg hidden sm:block ${
              currentPage === Math.ceil(blogs.length / blogsPerPage)
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            Last{" >>"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
