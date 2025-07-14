import { insertFavorite, favoriteExists, deleteFavorite } from "@/lib/data";
import { auth } from "@/lib/auth";
import { FaRegClock, FaClock } from "react-icons/fa";
import { insertFav, deleteFav } from "@/lib/actions";
export default async function TitleCard({
  id,
  email,
  title,
  released,
  genre,
  image,
  synopsis,
  isFavorite,
}: {
  id: string;
  email: string;
  title: string;
  released: number;
  genre: string;
  image: string;
  synopsis: string;
  isFavorite?: Promise<boolean>;
}) {
  return (
    <div className="relative group">
      <img
        className="w-75 h-75 border-2 border-sidebar-100 rounded-2xl"
        src={image}
        alt={image}
      ></img>
      <div className="hidden group-hover:flex group-active:flex absolute flex-row space-x-5 top-0 right-0 overflow-hidden rounded-b-2xl p-2">
        {(await isFavorite) ? (
          <form action={deleteFav}>
            <input type="hidden" name="title_id" value={id} />
            <input type="hidden" name="user_id" value={email} />
            <button type="submit">
              <FaClock />
            </button>
          </form>
        ) : (
          <form action={insertFav}>
            <input type="hidden" name="title_id" value={id} />
            <input type="hidden" name="user_id" value={email} />
            <button type="submit" disabled={false}>
              <FaRegClock />
            </button>
          </form>
        )}

        <button></button>
      </div>
      <div
        className="hidden group-hover:flex group-active:flex absolute flex-col top-[60%] overflow-hidden bg-atlas_blue-50 w-75
      h-30 border-r-2 border-l-2 border-b-2 border-navbar-100  rounded-b-2xl p-2 overflow-y-auto"
      >
        <div className="flex flex-row space-x-4">
          <p>{title}</p>
          <p>({released})</p>
        </div>

        <p>{synopsis}</p>
        <p className="bg-navbar-100 w-15 rounded-2xl text-center">{genre}</p>
      </div>
    </div>
  );
}
