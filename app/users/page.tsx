import React from "react";
import Link from "next/link";
import { getAllUsers } from "../lib/users/getAllUsers";
import { User } from "@/types";

const UsersPage = async () => {
  const users = await getAllUsers();

  return (
    <main>
      <h1>UsersPage</h1>
      <ul>
        {users.map(({ id, name }: User) => {
          return (
            <li>
              <Link href={`/users/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default UsersPage;
