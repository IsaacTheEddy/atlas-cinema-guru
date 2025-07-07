import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div className="flex md:h-screen w-screen flex-col">
      <NavBar email={session?.user?.email} />
      <div className="flex md:flex-row flex-col w-screen h-screen">
        <SideBar />
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
}
