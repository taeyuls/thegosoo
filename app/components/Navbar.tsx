"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <h1 className="text-3xl">The GoSoo</h1>
          <p>고객의 수고를 덜어드립니다.</p>
        </div>
        <div className="space-x-4 text-xl">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
