"use client";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MovieWrapper, useMovieContext } from "@/context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MovieWrapper>
      <div className="flex md:h-screen w-full h-full flex-col ">
        <NavBar />
        <div className="flex md:flex-row flex-col w-full h-full">
          <SideBar />
          <div className="flex flex-col w-full">{children}</div>
        </div>
      </div>
    </MovieWrapper>
  );
}
