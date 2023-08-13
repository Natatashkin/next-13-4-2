import React from "react";

export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const users = await res.json();
  return users;
};

export const getUserById = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const user = await res.json();
  return user;
};
