import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcelo Marreiros | Software Developer",
  description: "C++ backend engineer focused on Bazel, gRPC, distributed systems, and retail POS modernization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
