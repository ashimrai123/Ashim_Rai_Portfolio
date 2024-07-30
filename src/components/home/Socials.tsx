import { Dot } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Card } from "../ui/card";
import Link from "next/link";

const Socials = () => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Dot />
          <p className="text-lg ">Socials</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"https://www.facebook.com/ashim.bantawa/"}>
            <FaFacebookF />
          </Link>
          <Link href={"https://www.instagram.com/ashim_raibs/"}>
            <FaInstagram />
          </Link>
          <Link href={"https://www.linkedin.com/in/ashim-rai-a90857198/"}>
            <FaLinkedinIn />
          </Link>
          <Link href={"https://github.com/ashimrai123"}>
            <FaGithub />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCzPeNkKH86i0BZXWsr-mIlw"}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Socials;
