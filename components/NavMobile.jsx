"use client";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Blog",
      href: "#Blog",
    },
    {
      label: "Road Map",
      href: "#RoadMap",
    },
    {
      label: "Team",
      href: "#Team",
    },
    {
      label: "Fame Hiem",
      href: "#FameHiem",
    },
    {
      label: "Features",
      href: "#Features",
    },
  ];
  return (
    <Navbar
      className="w-0 lg:hidden md:hidden sm:visible"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="flex p-0 w-4 text-white"
      />

      <NavbarMenu className="mt-10 pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
