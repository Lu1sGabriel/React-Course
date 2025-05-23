import React, { ReactNode } from "react";

interface UserProps {
  name: string;
  children?: ReactNode;
}

const User = ({ name, children }: UserProps) => {
  return (
    <div>
      <p>{name}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default User;
