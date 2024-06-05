import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { BaseLayout } from "@/widgets/layouts";

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
    <html lang="en">
      <body className={inter.className}>
          <BaseLayout>
            {children}
          </BaseLayout>
      </body>
    </html>
  );
}
