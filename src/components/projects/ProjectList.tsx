import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { projects } from "@/data/data";
import { cn } from "@/lib/utils";

interface ProjectListProps {
  searchTerm: string;
  selectedTags: string[];
  sortOption: string;
}

const ProjectList: React.FC<ProjectListProps> = ({
  searchTerm,
  selectedTags,
  sortOption,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
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
    setCurrentPage(Math.ceil(projects.length / projectsPerPage));
  };

  const getPageNumbers = () => {
    const totalPageNumbers = Math.ceil(projects.length / projectsPerPage);
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
      <Card>
        {currentProjects.map((project) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-10 border-b-2 pb-10 pt-2 w-full"
            key={project.title}
          >
            <div className="relative rounded-lg w-full pb-[56.25%]">
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="w-full"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover "
                />
              </Link>
            </div>
            <div className="relative flex flex-col gap-1.5 sm:gap-3">
              <Link href={`/projects/${project.id}`}>
                <p className="text-lg font-semibold sm:text-xl">
                  {project.title}
                </p>
              </Link>
              <p className="text-xs sm:text-sm">{project.duration}</p>
              <div className="w-full flex gap-2 overflow-x-auto scrollbar-hide">
                {project.tags.map((tag) => (
                  <Button key={tag} variant={"secondary"} className="">
                    {tag}
                  </Button>
                ))}
              </div>
              <div className="text-xs sm:text-sm">{project.header}</div>
              <div className="flex gap-2">
                <Link
                  href={`/projects/${project.id}`}
                  className={cn(buttonVariants({ variant: "secondary" }), "")}
                >
                  View Details
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "secondary" }), "")}
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Card>

      {/* Pagination controls */}
      <div className="flex  justify-between items-center mt-4 gap-2">
        <div className="flex gap-2">
          <Button
            onClick={firstPage}
            disabled={currentPage === 1}
            className={`hidden sm:block px-3 py-1 rounded-lg  ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            {"<< "}First
          </Button>
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg  ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            {"< "}Previous
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {getPageNumbers().map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`mx-1 px-3 py-1 rounded-lg  ${
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
            disabled={
              currentPage === Math.ceil(projects.length / projectsPerPage)
            }
            className={`px-3 py-1 rounded-lg  ${
              currentPage === Math.ceil(projects.length / projectsPerPage)
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            Next{" >"}
          </Button>
          <Button
            onClick={lastPage}
            disabled={
              currentPage === Math.ceil(projects.length / projectsPerPage)
            }
            className={`hidden sm:block px-3 py-1 rounded-lg  ${
              currentPage === Math.ceil(projects.length / projectsPerPage)
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

export default ProjectList;
