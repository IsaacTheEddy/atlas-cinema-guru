import Image from "next/image";
import { signOut } from "@/lib/auth";

export default function NavBar({
  email,
}: {
  email?: string | undefined | null;
}) {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-navbar-100 text-atlas_blue-100 group">
      <div>
        <h1 className="md:text-3xl text-2xl font-bold ">Cinema Guru</h1>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-end justify-between font-medium md:visible invisible">
        <p className="md:pr-5 text-l">Welcome, {email}</p>
        <button
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
