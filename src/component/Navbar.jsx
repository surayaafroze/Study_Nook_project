"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handelSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white dark:bg-zinc-950">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400"
          >
            <FiBookOpen className="h-6 w-6" />
            StudyNook
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link
              href="/"
              className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/room"
              className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Room
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  href="/addrooms"
                  className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Add-Room
                </Link>
              </li>

              <li>
                <Link
                  href="/my-listing"
                  className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  My Listings
                </Link>
              </li>

              <li>
                <Link
                  href="/mybookings"
                  className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  My Bookings
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Auth Buttons / User */}
        <div className="flex items-center gap-4">
          {!user ? (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link
                  href="/login"
                  className="px-4 py-2 font-medium hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                >
                  SignIn
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="px-4 py-2 font-medium bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-md transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

              <p className="text-sm font-medium hidden md:block">
                {user?.name}
              </p>

              <Button
                onClick={handelSignOut}
                color="danger"
                variant="solid"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;