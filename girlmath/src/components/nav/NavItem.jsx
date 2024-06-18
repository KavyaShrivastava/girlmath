import Link from "next/link";
import { nav } from "@/constants/nav";

const NavItem = ({ path, icon }) => {
  return (
    <Link href={path} className="">
      {icon}
    </Link>
  );
};

export default NavItem;
