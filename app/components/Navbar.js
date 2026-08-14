"use client"
import React, { useState,useRef,useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setshowdropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <nav className="sticky top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row md:flex-col items-center px-8 py-5">
        <Link href="/">
          <p className="text-2xl font-bold text-white">
            🎧 Buy Me a Headphone
          </p></Link>
        {session ? (<>
          <div ref={dropdownRef} className="relative inline-block">
            <button
              onClick={() => setshowdropdown(!showdropdown)}
              className=" flex justify-center items-center px-6 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 duration-300 font-semibold shadow-lg shadow-violet-600/40"
              type="button"
            >
              {session.user.email}
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {showdropdown && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-md bg-gray-900 shadow-lg ring-1 ring-white/10 z-50">
                <Link
                  href={`/${session.user.name}`}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Your page
                </Link>

                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Dashboard
                </Link>

                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Home Page
                </Link>

                <button
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>

        </>) : (

          <Link href={"/login"}>
            <button className="px-6  py-2 rounded-xl bg-violet-600 hover:bg-violet-500 duration-300 font-semibold shadow-lg shadow-violet-600/40">
              Login
            </button></Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
