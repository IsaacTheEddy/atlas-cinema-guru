import { fetchFavorites, favoriteExists } from "@/lib/data";
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

export default async function Page({ params }: { params: { page?: string } }) {
  const { page } = await params;
  const session = await auth();
  if (!session?.user?.email) return <div>Unauthorized</div>;
  if (!page) return <div>Page not found</div>;

  const email = session.user.email;
  const currentPage = page ? parseInt(page) : 1;

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

  const titleList = await fetchFavorites(currentPage, email);
  const nextPageTitles = await fetchFavorites(currentPage + 1, email);

  const hasNextPage = nextPageTitles.length > 0;

  const enrichedTitles: Title[] = await Promise.all(
    titleList.map(async (title) => {
      const isFav = await favoriteExists(title.id, email);
      console.log(isFav);
      return { ...title };
    })
  );

  return (
    <ClientPage
      list={enrichedTitles}
      email={email}
      page={currentPage}
      hasNextPage={hasNextPage}
    />
  );
}
