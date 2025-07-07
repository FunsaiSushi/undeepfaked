import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-semibold text-foreground">
                UndeepFaked
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/start"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
