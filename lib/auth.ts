import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { redirect } from "next/dist/server/api-utils";


export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [GitHub],
});
