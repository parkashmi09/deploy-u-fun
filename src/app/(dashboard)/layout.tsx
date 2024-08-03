// RootLayout.tsx

import "@/app/globals.css";
import Head from "next/head";
import ComponentLayout from "@/components/ComponentLayout";

export const metadata = {
  title: "Usefun Dashboard",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className=" h-screen UI-Ecommerce flex">
        <ComponentLayout />
        <main className=" w-full md:pl-[300px] 2xl:pl-[350px] pl-0 h-screen scrollbar-hide">
          {children}
        </main>
      </body>
    </html>
  );
}
