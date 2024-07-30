"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Dot, MessageSquare, Mail, X, PhoneCall } from "lucide-react";
import Link from "next/link";

const getKathmanduTime = () => {
  const kathmanduTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
  });
  return kathmanduTime;
};

const Detail = () => {
  const [time, setTime] = useState(getKathmanduTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getKathmanduTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="">
      <div className="flex items-center gap-2 mb-4">
        <Dot />
        <p className="ml-2 text-lg">Details</p>
      </div>
      <div className="flex flex-row sm:flex-col items-start sm:items-center space-y-4 pt-2">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="/Ashim.jpeg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="text-center md:text-left">
            <p className="font-bold">Ashim Rai</p>
            <p>Lalitpur, Nepal</p>
            <p>{time}</p>
          </div>
        </div>
        <div className="flex flex-col  space-y-2 sm:space-y-4 w-full text-center sm:pt-4">
          <Link
            href={""}
            className="flex items-center space-x-2 p-2 rounded-md w-full md:w-auto "
          >
            <MessageSquare />
            <span>Chat with me</span>
          </Link>
          <Link
            href={""}
            className="flex items-center space-x-2 p-2 rounded-md w-full md:w-auto "
          >
            <Mail />
            <span>Shoot me an email</span>
          </Link>
          <Link
            href={""}
            className="flex items-center space-x-2 p-2 rounded-md w-full md:w-auto "
          >
            <X />
            <span>Message me on X</span>
          </Link>
          <Link
            href={""}
            className="flex items-center space-x-2 p-2 rounded-md w-full md:w-auto "
          >
            <PhoneCall />
            <span>Call me: +977 9818991685</span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
