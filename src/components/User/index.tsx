import { useEffect, useState } from "react";

interface UserProps {
  name: string;
}

const User = ({ name }: UserProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [name]);

  return (
    <span
      className={`inline-block font-semibold text-indigo-600 ${
        animate ? "fade-in" : ""
      }`}
    >
      {name}
    </span>
  );
};

export default User;
