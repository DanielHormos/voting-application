import { Route } from "next";
import Link from "next/link";

const navItems = [
  { name: "Add representative", href: "/add-representative" },
  { name: "Representatives", href: "/representatives" },
];

export function Navbar() {
  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {navItems.map((navItems, index) => {
        return (
          <>
            <li key={index} className="p-5">
              <Link href={navItems.href as Route}>{navItems.name}</Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}
