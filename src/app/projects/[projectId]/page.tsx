"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/data";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    projectId: string;
  };
}

const ProjectDetails = ({ params }: PageProps) => {
  const proId = params.projectId;

  const project = projects.find((project) => project.id === proId);

  return (
    <>
      <MaxWidthWrapper className="mt-10 sm:mt-12">
        <div className="grid  lg:grid-cols-3  gap-8">
          <Card className="flex flex-col gap-3 sm:gap-5 lg:col-span-2">
            <div className="flex font-semibold ">
              <Dot />
              <Link href={"/projects"} className="pr-1">
                Projects{" "}
              </Link>{" "}
              / {project?.title}
            </div>
            <div className="rounded-xl">
              {project?.images.map((image) => (
                <div key={image} className="relative w-full pb-[56.25%]">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-xl font-semibold">{project?.title}</p>
            <p className="">{project?.header}</p>
          </Card>
          <Card className="flex flex-col gap-5">
            <div className="flex font-semibold">
              <Dot />
              <p>Details</p>
            </div>
            <div className="flex">
              <p className="pr-1">Duration:</p>
              <p>{project?.duration}</p>
            </div>
            <div>
              <p>Team</p>
              <div>
                {project?.team.map((member) => (
                  <p key={member}>{member}</p>
                ))}
              </div>
            </div>
            <div className="flex">
              <p className="pr-1">Role:</p>
              <p>{project?.role}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {project?.tags.map((tag) => (
                <Button key={tag} variant={"secondary"} className="">
                  {tag}
                </Button>
              ))}
            </div>
          </Card>
          <Card className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex font-semibold ">
              <Dot />
              <p>About</p>
            </div>
            <p>{project?.description}</p>
          </Card>
          <Card className="flex flex-col gap-5">
            <div className="flex font-semibold">
              <Dot />
              <p>Live Demo:</p>
            </div>
            <Link
              href={project!.demo}
              className={cn(buttonVariants({ variant: "default" }), "w-20")}
              target="blank"
            >
              Demo
            </Link>
          </Card>
          <Card className=" lg:col-span-3 flex flex-col gap-5">
            <div className="flex font-semibold">
              <Dot />
              <p>Similar Projects</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-h-96 overflow-y-auto scrollbar-thin ">
              {projects.map((project) => (
                <>
                  <Link
                    href={"/projects/" + project.id}
                    className="relative w-full pb-[56.25%]"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="rounded-xl"
                    />
                  </Link>
                  <Link href={"/projects/" + project.id}>{project.title}</Link>
                </>
              ))}
            </div>
          </Card>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProjectDetails;
