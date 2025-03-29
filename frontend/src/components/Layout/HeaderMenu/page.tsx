"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(pathname);
  }, []);


  return (
    <nav className="bg-white shadow-md">
      {!mobileMenuOpen && (
        <div className="max-w-7xl sm:px-2 lg:px-2">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 max-h-40 h-40">
                <img src="/assets/img/logo-nps.png" alt="Logo" width={150} />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="/"
                  className={
                    isActive === "/"
                      ? "text-gray-900 border-purple-600 font-bold inline-flex items-center px-1 pt-1 border-b-2  hover:border-gray-300"
                      : "text-gray-900 font-bold inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                  }
                >
                  Home
                </a>
                <a
                  href="/dashboard"
                  className={
                    isActive === "/dashboard"
                      ? "text-gray-900 border-purple-600 font-bold inline-flex items-center px-1 pt-1 border-b-2  hover:border-gray-300"
                      : "text-gray-900 font-bold inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                  }
                >
                  Dashboard
                </a>
              </div>
            </div>
            <a
              href="/register-nps"
              className="flex items-center font-bold justify-center mt-3 px-4 py-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smile-plus-icon lucide-smile-plus mr-2"
              >
                <path d="M22 11v1a10 10 0 1 1-9-10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" x2="9.01" y1="9" y2="9" />
                <line x1="15" x2="15.01" y1="9" y2="9" />
                <path d="M16 5h6" />
                <path d="M19 2v6" />
              </svg>
              Resgistrar Pesquisa
            </a>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 mr-3 rounded-md text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {mobileMenuOpen && (
        <div className="bg-white sm:hidden p-4 ">
          <div className="absolute top-0 right-0 p-2">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" pt-2 pb-4 space-y-1">
            <a
              href="/"
              className={
                isActive === "/"
                  ? "text-gray-900 block font-bold pl-3 pr-4 py-2 border-l-4 border-purple-600 hover:bg-gray-50 hover:border-gray-300"
                  : "text-gray-900 block font-bold pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300"
              }
            >
              Home
            </a>
            <a
              href="/dashboard"
              className={
                isActive === "/dashboard"
                  ? "text-gray-900 block font-bold pl-3 pr-4 py-2 border-l-4 border-purple-600 hover:bg-gray-50 hover:border-gray-300"
                  : "text-gray-900 block font-bold pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300"
              }
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
