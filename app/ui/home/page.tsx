import { fetchTitles, favoriteExists } from "@/lib/data";
import { auth } from "@/lib/auth";
import ClientPage from "@/components/ClientPage"; // this will stay a Client Component

interface Title {
  favorited: boolean;
  watchLater: boolean;
  image: string;
  id: string;
  title: string;
  synposis: string;
  released: number;
  genre: string;
  isFavorite?: boolean;
}

export default async function Page() {
  const session = await auth();
  if (!session?.user?.email) return <div>Unauthorized</div>;

  const email = session.user.email;

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

  const enrichedTitles: Title[] = await Promise.all(
    titleList.map(async (title) => {
      const isFav = await favoriteExists(title.id, email);
      return { ...title };
    })
  );

  return <ClientPage list={enrichedTitles} email={email} />;
}
