"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch, HiTrendingUp } from "react-icons/hi";
import ReButton from "../../ui/ReButton";
import { FaUserAlt } from "react-icons/fa";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className=" w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => null}
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
          >
            <RxCaretLeft className={"text-white"} size={35} />
          </button>

          <button
            onClick={() => null}
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transition"
          >
            <RxCaretRight className={"text-white"} size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => null}
            className="rounded-full p-2 bg-neutral-900 flex items-center justify-center hover:opacity-75 transition"
          >
            <HiHome className={"text-white"} size={24} />
          </button>
          <button
            onClick={() => null}
            className="rounded-full p-2 bg-neutral-900 flex items-center justify-center hover:opacity-75 transition"
          >
            <HiSearch className={"text-white"} size={24} />
          </button>
          <button className="rounded-full p-2 bg-neutral-900 flex items-center justify-center hover:opacity-75 transition">
            <HiTrendingUp className={"text-white"} size={24} />
          </button>
        </div>
        <div className="flex gap-x-4 justify-between items-center">
          {false ? (
            <div className={"flex gap-x-4 items-center"}>
              <ReButton onClick={() => null} className={"bg-white px-6 py-2"}>
                Logout
              </ReButton>
              <ReButton onClick={() => null} className={"bg-white"}>
                <FaUserAlt />
              </ReButton>
            </div>
          ) : (
            <>
              <div>
                <ReButton
                  onClick={() => null}
                  className={"bg-transparent text-neutral-300 font-medium"}
                >
                  Sign Up
                </ReButton>
              </div>
              <div>
                <ReButton onClick={() => null} className={"bg-white px-6 py-2"}>
                  Log In
                </ReButton>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
