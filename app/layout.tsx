import "./globals.css";
import { Exo, Barlow } from "next/font/google";

const exo = Exo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-exo",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata = {
  title: "SwiftRooms",
  description: "SwiftRooms Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${barlow.variable}`}>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}