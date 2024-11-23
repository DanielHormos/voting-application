import { Route } from "next";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Representatives", href: "/representatives" },
  { name: "Add Representative", href: "/add-representative" },
];

export function Navbar() {
  return (
    <ul className="flex gap-8 justify-center bg-gray-100 p-4 ">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.href} className="">
            <Link href={navItem.href as Route}>{navItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
