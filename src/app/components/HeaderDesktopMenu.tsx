"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "classnames";
import StaticMenuDesktopStructure from "./StaticDesktopMenuStructure";

function HeaderDesktopMenu() {
  const t = useTranslations("HeaderMenu");
  const pathname = usePathname();

  const stripLocale = (path: string) => {
    const parts = path.split("/");
    if (parts.length > 1 && ["en", "ru", "kz"].includes(parts[1])) {
      return "/" + parts.slice(2).join("/");
    }
    return path;
  };

  const currentPath = stripLocale(pathname);
  
  const menuItems = [
    { href: "/", label: t("main") },
    { href: "/blog", label: t("blog") },
    { href: "/works", label: t("works") },
    { href: "/contacts", label: t("contacts") },
  ];

  return (
    <StaticMenuDesktopStructure>
      {menuItems.map((item) => (
        <li
          key={item.href}
          className={clsx(
            "header-menu__item",
            item.href === "/"
                ? currentPath === item.href && "header-menu__item_active"
                : currentPath.startsWith(item.href) && "header-menu__item_active"
          )}
        >
          <Link href={item.href} title={item.label}>
            {item.label}
          </Link>
        </li>
      ))}
    </StaticMenuDesktopStructure>
  );
}

export default HeaderDesktopMenu;
