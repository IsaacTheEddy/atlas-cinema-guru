import "@/app/global.css";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { MovieWrapper } from "@/context";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased  bg-[#00003c] text-white`}>
        {" "}
        <MovieWrapper>
          <div className="flex md:h-screen w-full h-screen flex-col ">
            <NavBar />
            <div className="flex md:flex-row flex-col ">
              <SideBar />
              <div className="flex flex-col w-full">{children}</div>
            </div>
          </div>
        </MovieWrapper>
      </body>
    </html>
  );
}
