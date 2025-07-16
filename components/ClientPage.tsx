"use client";

import { useMovieContext } from "@/context";
import TitleCard from "@/components/TitleCard";
import Filter from "@/components/FIlter";
import { useEffect } from "react";
import Link from "next/link";

interface Title {
  id: string;
  title: string;
  released: number;
  genre: string;
  image: string;
  synopsis: string; // fixed spelling
  isFavorite?: boolean;
}

export default function ClientPage({
  list,
  email,
  page,
  hasNextPage,
}: {
  list: Title[];
  email: string;
  page: number;
  hasNextPage: boolean;
}) {
  const { searchFilter } = useMovieContext();

  const filteredTitles = searchFilter
    ? list.filter((title) =>
        title.title.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : list;

  console.log("Rendering ClientPage with searchFilter:", searchFilter);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5">
        <h1 className="text-3xl">{searchFilter}</h1>
      </div>
      <Filter />
      <div className="flex flex-row justify-evenly w-full">
        {page > 1 ? (
          <Link href={`${page - 1 > 0 ? page - 1 : 1}`}>
            <button className="flex bg-atlas_blue-50 w-20 h-10 border-navbar-100 border-2 text-navbar-100 text-center justify-center items-center hover:bg-sidebar-100 hover:text-white rounded-2xl">
              Previous
            </button>
          </Link>
        ) : (
          <div></div>
        )}
        {hasNextPage ? (
          <Link href={`${page + 1 > 0 && hasNextPage ? page + 1 : 1}`}>
            <button className="flex bg-atlas_blue-50 w-20 h-10 border-navbar-100 border-2 text-navbar-100 text-center justify-center items-center hover:bg-sidebar-100 hover:text-white rounded-2xl">
              Next
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 m-auto gap-y-5 md:gap-x-40">
        {filteredTitles.map((title) => (
          <TitleCard
            key={title.id}
            id={title.id}
            title={title.title}
            released={title.released}
            genre={title.genre}
            image={title.image}
            synopsis={title.synopsis}
            email={email}
          />
        ))}
      </div>
    </div>
  );
}
