import Image from "next/image";
import { signOut } from "@/lib/auth";

export default function NavBar({
  email,
}: {
  email?: string | undefined | null;
}) {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-navbar-100 text-atlas_blue-100">
      <div>
        <h1 className="text-3xl font-bold ">Cinema Guru</h1>
      </div>
      <div className="flex flex-row items-center justify-between font-medium">
        <p className="pr-5">Welcome, {email}</p>
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
