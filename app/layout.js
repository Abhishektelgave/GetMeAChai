// "use client"
import localFont from "next/font/local";
import "./globals.css";
import ClientComponent from "./components/ClientComponent.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



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

export const metadata = {
  title: "Get Me A Chai - Project",
  description: "Next JS Project - @Abhishektelgave",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Navbar/>
        {children}
        <Footer />
        <ClientComponent />
      </body>
    </html>
  );
}
