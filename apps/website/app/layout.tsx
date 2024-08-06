import type { Metadata } from "next";
import "@repo/ui/globals.css";
import fonts from './fonts'
import Provider from "~/providers";
import { ThemeSwitch } from "@repo/ui/theme/ThemeSwitch";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`
      ${fonts.inter.variable} 
      bg-gray-100 dark:bg-background       `}>
    <Provider>
      <div className="absolute top-0 right-0">
      <ThemeSwitch />
      </div>
      {children}
    </Provider>
      </body>
    </html>
  );
}
