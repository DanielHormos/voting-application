import { Route } from "next";
import Link from "next/link";

const navItems = [
  { name: "Add representative", href: "/add-representative" },
  { name: "Representatives", href: "/representatives" },
];

export function Navbar() {
  return (
    <ul>
      {navItems.map((navItems) => {
        return (
          <>
            <li>
              <Link href={navItems.href as Route}>{navItems.name}</Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}
