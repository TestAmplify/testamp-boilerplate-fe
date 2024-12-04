import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import QueryProvider from "@/lib/react-query/query-provider";
import { UserInfoProvider } from "@/contexts/UserInfoProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "@/contexts/ThemeContext";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { idbPersister, queryClient } from "@/lib/react-query/persist-client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Test Amplify",
  description: "Test Amplify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
      >
        <ThemeProvider>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: idbPersister }}
          >
            <QueryProvider>
              <UserInfoProvider>
                {children}
                <ToastContainer />
              </UserInfoProvider>
            </QueryProvider>
          </PersistQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
