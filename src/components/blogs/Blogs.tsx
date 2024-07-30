"use client";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { ImCross } from "react-icons/im";

import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Button, buttonVariants } from "../ui/button";

import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import BlogsList from "./BlogsList";

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
      handleSortChange(tag); // Call handleSortChange when a tag is clicked
    }
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    // Optionally, you may call handleSortChange or perform other actions when removing a tag
  };

  return (
    <>
      <Card className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Dot />
          <p className="ml-2">Blogs</p>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Blogs"
            className="flex-1 p-2 border rounded"
          />
          <FaSearch />
        </div>
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-2 ">
            <Button variant={"default"}>All</Button>
            {selectedTags.map((tag) => (
              <Button
                key={tag}
                variant={"outline"}
                className=" flex items-center gap-2"
                onClick={() => handleRemoveTag(tag)}
              >
                {tag}
                <ImCross className="size-2" />
              </Button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger
              className={cn(
                "flex items-center gap-2",
                buttonVariants({ variant: "secondary" })
              )}
            >
              <p>Filters</p>
              <BsSliders />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search Filters</DialogTitle>
                <DialogDescription className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <h1>Tags</h1>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleTagClick("Tag1")}
                    >
                      Tag1
                    </Button>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleTagClick("Tag2")}
                    >
                      Tag2
                    </Button>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleTagClick("Tag3")}
                    >
                      Tag3
                    </Button>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleTagClick("Tag4")}
                    >
                      Tag4
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1>Sort By</h1>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleSortChange("Date")}
                    >
                      Date
                    </Button>
                    <Button
                      variant={"secondary"}
                      onClick={() => handleSortChange("Alphabet")}
                    >
                      Alphabet
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <BlogsList
          searchTerm={searchTerm}
          selectedTags={selectedTags}
          sortOption={sortOption}
        />
      </Card>
    </>
  );
};

export default Blogs;
