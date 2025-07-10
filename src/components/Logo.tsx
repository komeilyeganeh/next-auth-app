import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href="/" className="text-2xl font-extrabold group">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
        Auth
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">App</span>
    </Link>
  );
};
