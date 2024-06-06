import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppRoot from '../src/app';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Личный кабинет",
  description: "Личный кабинет",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Root>
        {children}
    </Root>            
  );
}
