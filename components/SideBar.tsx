import Link from "next/link";

// Icon SVGs suggest you minimize in editor
const fileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M3 9C3 7.34315 4.34315 6 6 6H13.5L16.5 9H24C25.6569 9 27 10.3431 27 12V21C27 22.6569 25.6569 24 24 24H6C4.34315 24 3 22.6569 3 21V9Z"
      fill="white"
    />
  </svg>
);
const favoritesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
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
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27ZM16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V15C14 15.2652 14.1054 15.5196 14.2929 15.7071L18.5355 19.9497C18.9261 20.3403 19.5592 20.3403 19.9497 19.9497C20.3403 19.5592 20.3403 18.9261 19.9497 18.5355L16 14.5858V9Z"
      fill="white"
    />
  </svg>
);

export default function SideBar({
  date,
  activity,
}: {
  date?: string;
  activity?: string;
}) {
  return (
    <div className="flex flex-row bg-sidebar-100 h-15 md:h-full md:flex-col md:w-20 md:items-start hover:w-50 p-5 group ">
      <div className="flex flex-row md:flex-col md:space-y-5 md:flex-1 mb-5 justify-between space-x-6 md:space-x-0 items-center ">
        <Link href={"/ui/home"} className="flex flex-row items-start w-full">
          {fileIcon}
          <span className="md:invisible md:group-hover:visible">Home</span>
        </Link>
        <Link
          href={"/ui/favorites"}
          className="flex flex-row items-start w-full"
        >
          {favoritesIcon}
          <span className="md:invisible md:group-hover:visible">Favorites</span>
        </Link>
        <Link
          href={"/ui/watchLater"}
          className="flex flex-row items-start w-full"
        >
          {watchLaterIcon}
          <span className="md:invisible md:group-hover:visible">
            Watch Later
          </span>
        </Link>
      </div>

      <div className="flex flex-col flex-3 invisible group-hover:visible text-center w-full bg-navbar-100 rounded-2xl">
        <span className="font-bold text-atlas_blue-100">Latest Activites</span>
        <div className="flex flex-col space-y-1 p-2 ">
          <p>{date}Hekko</p>
          <p>{activity}poo pee</p>
        </div>
      </div>
    </div>
  );
}
