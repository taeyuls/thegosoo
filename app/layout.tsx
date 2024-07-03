import Navbar from "./components/Navbar";
import "./styles/globals.css";

export const metadata = {
  title: "The GoSoo - 고객의 수거를 덜",
  description: "A mobile-first Next.js app with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
