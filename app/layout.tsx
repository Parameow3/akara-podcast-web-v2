import "./globals.css";

import type { Metadata } from "next";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { Figtree } from "next/font/google";
import Player from "@/components/ui/Player";
import { AppShell } from "@/components/app-shell";

const font = Figtree({ subsets: ["latin"] });
import APP_CONFIG from "../app.conf.json";

export const metadata: Metadata = {
  title: APP_CONFIG["app-name"],
  description: APP_CONFIG["app-description"],
};

/*-- NEXT CACHE  --*/
export const revalidate = 0;

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`p-2 ${font.className}`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <AppShell>{children}</AppShell>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
