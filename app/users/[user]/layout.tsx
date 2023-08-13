import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "User",
  description: "User data",
};

const UserLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default UserLayout;
