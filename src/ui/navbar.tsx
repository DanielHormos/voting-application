import { Route } from "next";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Representatives", href: "/representatives" },
  { name: "Add Representative", href: "/add-representative" },
  { name: "Elections", href: "/elections" },
  { name: "Add Election", href: "/add-election" },
  { name: "Concluded Elections", href: "/concluded-elections" },
];

export function Navbar() {
  return (
    <ul className="menu menu-horizontal bg-base-200 flex justify-center">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.href}>
            <Link href={navItem.href as Route} className="text-3xl">
              {navItem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
