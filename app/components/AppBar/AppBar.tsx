"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_DATA } from "@/app/lib/constants";

import styles from "./AppBar.module.scss";

const AppBar = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <ul className={styles.menuList}>
        {MENU_DATA.map(({ id, path, title }) => {
          const isActive = pathname === path;
          return (
            <li key={id} className={styles.menuListItem}>
              <Link
                href={path}
                className={isActive ? styles.activeItem : styles.itemColor}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default AppBar;
