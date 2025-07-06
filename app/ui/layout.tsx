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
    <div className="flex h-screen flex-col">
      <NavBar email={session?.user?.email} />
      <div className="flex flex-row h-screen">
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
}
