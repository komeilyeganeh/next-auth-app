import { FC } from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="max-w-6xl mx-auto p-3 flex items-center justify-between">
        <Logo />

        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/sign-in">Sign in</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
