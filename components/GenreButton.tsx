"use client";
import { useMovieContext } from "@/context";
import { useRouter } from "next/navigation";

export default function GenreButton({ genreName }: { genreName?: string }) {
  const { setGenere } = useMovieContext();
  const router = useRouter();

  function handleClick() {
    if (genreName === "All") {
      setGenere?.("");
      router.push(`/?page=1&genre=${encodeURIComponent("")}`);
      return;
    }
    setGenere?.(genreName);
    router.push(`/?page=1&genre=${encodeURIComponent(genreName ?? "")}`);
  }
  return (
    <button
      onClick={() => handleClick()}
      value={genreName}
      className="flex bg-atlas_blue-50 w-20 h-10 border-navbar-100 border-2 text-navbar-100 text-center justify-center items-center hover:bg-sidebar-100 hover:text-white rounded-2xl"
    >
      {genreName}
    </button>
  );
}
