"use client";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
           <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400">
          <FiBookOpen className="h-6 w-6" />
          StudyNook
        </Link>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/room"} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Room</Link>
          </li>
          <li>
            <Link href={"/addrooms"} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Add-Room</Link>
          </li>
        </ul>

        <div className="flex gap-4 ">
          <ul className="flex items-center gap-4  text-sm">
           
            <li>
              <Link href={"/login"}  className="px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-md transition-colors">SignIn</Link>
</li>
               <li>
              <Link href={"/register"} className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-md transition-colors">Register</Link>
             
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;