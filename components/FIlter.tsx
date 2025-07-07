import GenreButton from "@/components/GenreButton";

export default async function Filter() {
  return (
    <div className="flex flex-row justify-between w-[500px] m-auto">
      <form className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2">
          <label htmlFor="Search" className="pl-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Search"
            id="Search"
            className="border-2 border-navbar-100 rounded-4xl p-1 bg-atlas_blue-50"
          />
          <div className="flex flex-row space-y-2 space-x-5">
            <div className="flex flex-col">
              <label htmlFor="minYear" className="pl-2">
                min year
              </label>
              <input
                type="text"
                placeholder="min year"
                id="minYear"
                className="border-2 border-navbar-100 rounded-4xl p-1 bg-atlas_blue-50"
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
                className="border-2 border-navbar-100 rounded-4xl p-1 bg-atlas_blue-50"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
