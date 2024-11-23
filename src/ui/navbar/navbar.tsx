import { Route } from "next";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/welcome-page" },
  { name: "Representatives", href: "/representatives" },
  { name: "Add Representative", href: "/add-representative" },
];

export function Navbar() {
  return (
    <ul className="flex flex-wrap justify-center">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.href} className=" rounded-lg hover:text-gray-300">
            <Link href={navItem.href as Route}>{navItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
