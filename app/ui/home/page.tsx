import { favoriteExists, fetchTitles } from "@/lib/data";
import TitleCard from "@/components/TitleCard";
import { auth } from "@/lib/auth";
import Filter from "@/components/FIlter";
import { useContext } from "react";
import { MovieContext, useMovieContext } from "@/context";

export default async function ServerPage({}) {
  const session = await auth();
  if (!session?.user?.email) return;

  const email = session.user.email;
  const { searchFilter } = useMovieContext();

  const genres = [
    "Romance",
    "Horror",
    "Drama",
    "Action",
    "Mystery",
    "Fantasy",
    "Thriller",
    "Western",
    "Sci-Fi",
    "Adventure",
  ];

  const titleList = await fetchTitles(1, 1999, 2999, "", genres, email);

  // const filtered = titleList.filter((title) =>
  //   title.title.toLowerCase().includes(searchFilter.toLowerCase())
  // );

  const favorites = await Promise.all(
    titleList.map(async (title) => {
      const isFav = await favoriteExists(title.id, email);
      return { ...title, isFavorite: isFav };
    })
  );

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mt-5 flex-row ">
        <h1 className="text-3xl ">{searchFilter}</h1>
      </div>
      {/* Filter Goes Here */}
      <div className="flex flex-row w-[90%] mb-19">
        <Filter searchFilter={searchFilter} />
      </div>
      <div className="flex flex-col w-full">
        <div className="grid md:grid-cols-3 grid-cols-1 md:m-auto md:flex-wrap m-auto md:gap-x-40 gap-y-5 ">
          {titleList.map((title) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
