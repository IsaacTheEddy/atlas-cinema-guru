export default function TitleCard({
  title,
  released,
  genre,
  image,
  synopsis,
}: {
  title: string;
  released: number;
  genre: string;
  image: string;
  synopsis: string;
}) {
  return (
    <div className="relative group">
      <img
        className="w-75 h-75 border-2 border-sidebar-100 rounded-2xl"
        src={image}
        alt={image}
      ></img>
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
