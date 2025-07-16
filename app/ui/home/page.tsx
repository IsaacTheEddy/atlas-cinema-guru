import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) return redirect("/");
  else return redirect("/ui/home/1");
  return <></>;
}
