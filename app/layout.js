import { Archivo, Archivo_Black } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastHost from "@/components/ToastHost";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export const metadata = {
  title: {
    default: "MPS — Mukunzi Phones Solution",
    template: "%s — MPS",
  },
  description:
    "Genuine phones, laptops, TVs and electronics in Kigali, Rwanda. Pay with MTN MoMo or Airtel Money — delivered to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable + " " + archivoBlack.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ToastHost />
      </body>
    </html>
  );
}
