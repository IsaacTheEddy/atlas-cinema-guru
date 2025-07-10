"use client";

export default function GenreButton({ genre }: { genre?: string }) {
  function handleClick() {
    alert(`Button with value ${genre} clicked`);
  }
  return (
    <button
      onClick={() => handleClick()}
      value={genre}
      className="flex bg-atlas_blue-50 w-20 h-10 border-navbar-100 border-2 text-navbar-100 text-center justify-center items-center hover:bg-sidebar-100 hover:text-white rounded-2xl"
    >
      {genre}
    </button>
  );
}
