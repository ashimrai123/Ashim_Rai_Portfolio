import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex justify-between px-16 py-6 bg-transparent">
        <Link
          href={"./"}
          className="text-white text-2xl font-bold hover:bg-red-800 py-1 px-2"
        >
          Ashim Rai
        </Link>
        {/* <ul className="flex justify-between w-1/6">
          <li>
            <Link href={"./"} className="text-white hover:text-">
              Home
            </Link>
          </li>
          <li>
            <Link href={"./"} className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href={"./"} className="text-white">
              Contact
            </Link>
          </li>
        </ul> */}
      </header>
    </>
  );
};

export default Header;
