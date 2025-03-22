import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="relative w-full h-64">
        <Image
          src="/404.svg"
          alt="Error"
          fill
          className="animate-bounce"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-8">404</h1>
      <p className="text-md text-gray-600 mt-2">Page Not Found</p>
      <Link
        href="/"
        className="flex flex-row items-center space-x-2 mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-105"
      >
        <IoArrowBackOutline />
        <div>
          Back to Home
        </div>
      </Link>
    </div>
  );
}