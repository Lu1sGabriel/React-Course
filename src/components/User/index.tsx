import React from "react";

type UserProps = {
  name: string;
};

const User = ({ name }: UserProps) => {
  return (
    <span className="inline-block font-semibold text-indigo-600">{name}</span>
  );
};

export default User;
