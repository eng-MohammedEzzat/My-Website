import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Al-Madhoun | Computer Systems Engineer & Full-Stack Developer",
  description: "Professional CV & Portfolio of Mohammed Al-Madhoun - Computer Systems Engineer and Full-Stack Developer candidate specializing in Data Structures, Java, Python, and Modern Web Applications.",
  keywords: ["Mohammed Al-Madhoun", "Full-Stack Developer", "Computer Systems Engineer", "Gaza", "Palestine", "Next.js Portfolio", "React", "Python DSA"],
  authors: [{ name: "Mohammed Al-Madhoun" }],
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#f09a1a] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
