import "./globals.css";
import { Play } from "next/font/google";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Sarah's Portfolio",
  description:
    "Welcome to my portfolio! I'm a passionate full-stack engineer specializing in Node.js, Nest.js, React and Next.js. Mind chatting about your next project over some virtual pancakes? 🥞 Let's connect!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${play.variable} antialiased`}>{children}</body>
    </html>
  );
}
