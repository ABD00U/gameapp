import { Kings } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./componant/bootstarpclient";

const inter = Kings({
  subsets: ["latin"],

  weight: "400",
});

export const metadata = {
  title: "game app",
  description: "game app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-dark"}>
        <Navbar></Navbar>
        <div >
          {children}

          <BootstrapClient></BootstrapClient>
        </div>
      </body>
    </html>
  );
}
