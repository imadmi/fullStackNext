import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Navbar mli7a</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/notes" className="text-white hover:underline">
              Notes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
