import { HomeIcon } from "@heroicons/react/solid";

export const Paths = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

export const nav = [
  {
    title: "Home",
    path: Paths.HOME,
    icon: <HomeIcon />,
  },
  {
    title: "About",
    path: Paths.ABOUT,
    icon: "info",
  },
  {
    title: "Contact",
    path: Paths.CONTACT,
    icon: "mail",
  },
];
