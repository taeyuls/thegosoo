import Navbar from "./components/Navbar";
import "./styles/globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A mobile-first Next.js app with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
