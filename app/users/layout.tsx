import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "User Page",
};

export default function UserLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
