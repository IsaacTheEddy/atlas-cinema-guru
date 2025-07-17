import { FaRegClock, FaClock } from "react-icons/fa";
import { insertFav, insertWL } from "@/lib/actions";
const favoritesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 33 33"
    fill="none"
  >
    <path
      d="M14.9307 6.47966C15.4246 4.9595 17.5753 4.9595 18.0692 6.47966L19.834 11.9111C20.0549 12.591 20.6884 13.0512 21.4032 13.0512H27.1142C28.7126 13.0512 29.3772 15.0966 28.0841 16.0361L23.4638 19.393C22.8855 19.8131 22.6435 20.5579 22.8644 21.2377L24.6292 26.6692C25.1231 28.1893 23.3832 29.4534 22.0901 28.5139L17.4698 25.1571C16.8915 24.7369 16.1084 24.7369 15.5301 25.1571L10.9098 28.5139C9.61671 29.4534 7.87682 28.1893 8.37075 26.6692L10.1355 21.2377C10.3564 20.5579 10.1144 19.8131 9.53614 19.393L4.91586 16.0361C3.62273 15.0966 4.28731 13.0512 5.88571 13.0512H11.5967C12.3115 13.0512 12.945 12.591 13.1659 11.9111L14.9307 6.47966Z"
      fill="white"
    />
  </svg>
);
const watchLaterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27ZM16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V15C14 15.2652 14.1054 15.5196 14.2929 15.7071L18.5355 19.9497C18.9261 20.3403 19.5592 20.3403 19.9497 19.9497C20.3403 19.5592 20.3403 18.9261 19.9497 18.5355L16 14.5858V9Z"
      fill="white"
    />
  </svg>
);
export default function TitleCard({
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
      <div className="hidden group-hover:flex group-active:flex absolute flex-row space-x-2.5 top-0 right-0 overflow-hidden rounded-b-2xl p-2">
        <form action={insertFav}>
          <input type="hidden" name="title_id" value={id} />
          <input type="hidden" name="user_id" value={email} />
          <button type="submit" disabled={false}>
            {favoritesIcon}
          </button>
        </form>
        <form action={insertWL}>
          <input type="hidden" name="title_id" value={id} />
          <input type="hidden" name="user_id" value={email} />
          <button type="submit" disabled={false}>
            {watchLaterIcon}
          </button>
        </form>

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
