import "./globals.css";
import type { Metadata } from "next";
import { poppinsRegularFont } from "fonts";
import Providers from "@/shared/Providers";
import { IChildren } from "types";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegularFont.className} flex flex-col min-h-screen`}
      >
        {/* chackra ui providers and recoil */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
