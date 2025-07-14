"use client";
import GenreButton from "@/components/GenreButton";
import { useMovieContext } from "@/context";
export default function Filter({
  minYear,
  maxYear,
}: {
  searchFilter?: string | undefined;
  minYear?: number | undefined;
  maxYear?: number | undefined;
}) {
  const { setSearchFilter, setMinYear, setMaxYear } = useMovieContext();
  if (!setMinYear) {
    return;
  }
  if (!setMaxYear) {
    return;
  }
  return (
    <div className="flex md:flex-row flex-col justify-between md:w-full w-full md:m-auto">
      <form className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2">
          <label htmlFor="Search" className="pl-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Search"
            id="Search"
            className="border-2 border-navbar-100 rounded-4xl p-1 w-full bg-atlas_blue-50"
            onChange={(e) => setSearchFilter?.(e.target.value)}
          />
          <div className="flex flex-row space-y-2 md:space-x-5">
            <div className="flex flex-col">
              <label htmlFor="minYear" className="pl-2">
                min year
              </label>
              <input
                type="text"
                placeholder="min year"
                id="minYear"
                className="border-2 border-navbar-100 rounded-4xl p-1 w-40 bg-atlas_blue-50"
                value={minYear}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="maxYear" className="pl-2">
                max year
              </label>
              <input
                type="text"
                placeholder="max year"
                id="maxYear"
                className="border-2 border-navbar-100 rounded-4xl p-1 w-40 bg-atlas_blue-50"
                value={maxYear}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col space-y-2">
        <h1>Genres</h1>
        <div className="flex flex-col space-y-5 md:w-full">
          <div className="flex flex-row md:space-x-5">
            <GenreButton genre="Romance"></GenreButton>
            <GenreButton genre="Horror"></GenreButton>
            <GenreButton genre="Drama"></GenreButton>
            <GenreButton genre="Action"></GenreButton>
            <GenreButton genre="Mystery"></GenreButton>
          </div>
          <div className="flex flex-row md:space-x-5">
            <GenreButton genre="Fantasy"></GenreButton>
            <GenreButton genre="Thriller"></GenreButton>
            <GenreButton genre="Western"></GenreButton>
            <GenreButton genre="Sci-Fi"></GenreButton>
            <GenreButton genre="Adventure"></GenreButton>
          </div>
        </div>
      </div>
    </div>
  );
}
