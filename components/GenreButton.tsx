export default async function GenreButton({
  onClick,
  genre,
  children,
  ...buttonProps
}: {
  onClick?: () => void;
  genre: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      value={genre}
      className="flex bg-amber-50 w-15 h-10 text-navbar-100 text-center justify-center items-center rounded-2xl"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
