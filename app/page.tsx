import { signIn, signOut, auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  return (
    <div className="flex items-center justify-center h-screen">
      Hello Cinema Guru
      <form
        action={async () => {
          "use server";
          await signIn("default", { redirectTo: "/ui/home" });
        }}
      >
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <div>Sign In</div>
        </button>
      </form>
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            <div>Sign Out</div>
          </button>
        </form>
      ) : null}
    </div>
  );
}
