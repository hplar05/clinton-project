import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="h-14 flex items-center sticky top-0 bg-white z-10 shadow-md">
      {/* Add "sticky top-0 bg-white z-10 shadow-md" classes to make the navbar sticky */}
      <div className="container px-4 md:px-6 flex items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-lg font-bold tracking-tighter sm:text-2xl md:text-3xl">
            <span className="text-red-500">FILIPINO</span>{" "}
            <span className="text-green-600">DE CUISINE</span>
          </h1>
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className="text-l font-medium hover:underline underline-offset-4"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-l font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-lm font-medium hover:underline underline-offset-4"
            href="#menu"
          >
            Menu
          </Link>
        </nav>
      </div>
    </nav>
  );
};
