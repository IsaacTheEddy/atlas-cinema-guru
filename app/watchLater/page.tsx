import { fetchTitles, favoriteExists, fetchWatchLaters } from "@/lib/data";
import ClientPage from "@/components/ClientPage";
import SideBar from "@/components/SideBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

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

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  const session = await auth();
  if (!session) return redirect("/SignIn");
  if (!session?.user?.email) return <div>Unauthorized</div>;

  const email = session.user.email;

  const page = parseInt(searchParams.page as string) || 1;
  const minYear = parseInt(searchParams.minYear as string) || 1999;
  const maxYear = parseInt(searchParams.maxYear as string) || 2999;

  // ✅ Fix genre parsing
  let genres: string[] = [""];
  const genreParam = searchParams.genre;

  if (Array.isArray(genreParam)) {
    genres = genreParam;
  } else if (typeof genreParam === "string" && genreParam.length > 0) {
    genres = genreParam.split(",").map((g) => g.trim());
  } else if (genreParam === "") {
    genres = [
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
  }

  // Debug log to check parsed values
  console.log({
    page,
    email,
  });

  const titleList = await fetchWatchLaters(page, email);

  const nextPageTitles = await fetchWatchLaters(page + 1, email);

  const hasNextPage = nextPageTitles.length > 0;

  const enrichedTitles: Title[] = await Promise.all(
    titleList.map(async (title) => {
      const isFav = await favoriteExists(title.id, email);
      return { ...title, isFavorite: isFav };
    })
  );

  if (enrichedTitles.length === 0) {
    return <div>No titles found for current filters.</div>;
  }

  return (
    <ClientPage
      list={enrichedTitles}
      email={email}
      currentPage={page}
      hasNextPage={hasNextPage}
    />
  );
}
