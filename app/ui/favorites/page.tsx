import { fetchFavorites } from "@/lib/data";
import { auth } from "@/lib/auth";
import TitleCard from "@/components/TitleCard";

export default async function Page() {
  const session = await auth();
  if (!session) {
    return;
  }
  if (!session.user) {
    return;
  }
  const email = session.user.email;
  if (!email) {
    return;
  }

  const titleList = await fetchFavorites(1, email as string);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mt-5 flex-row ">
        <h1 className="text-3xl mb-20">Favorites</h1>
      </div>
      {/* Filter Goes Here */}
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
