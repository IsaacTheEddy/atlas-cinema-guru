import Filter from "@/components/FIlter";
import { fetchTitles } from "@/lib/data";
import { Title } from "@/lib/definitions";
import { auth } from "@/lib/auth";
import TitleCard from "@/components/TitleCard";

export default async function Page() {
  const session = await auth();
  const email = session?.user?.email;
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
  const titleList = await fetchTitles(
    1,
    1999,
    2999,
    "",
    genres,
    email as string
  );

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mt-5 flex-row ">
        <h1 className="text-3xl">Home</h1>
      </div>
      {/* Filter Goes Here */}
      <div className="flex w-[90%]">
        <Filter />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-center">Title</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 md:m-auto md:flex-wrap m-auto md:gap-x-40 gap-y-5 ">
          {titleList.map((title) => (
            <TitleCard
              key={title.id}
              title={title.title}
              released={title.released}
              genre={title.genre}
              image={title.image}
              synopsis={title.synopsis}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
