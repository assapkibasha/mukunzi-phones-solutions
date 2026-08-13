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
    default: "MPS — Mukunzi Phones Solutions",
    template: "%s — MPS",
  },
  description:
    "Mukunzi Phones Solutions — phones that power your life. Genuine phones, laptops and electronics in Kigali, Rwanda. Installments on iPhones, trade-in welcome, pay with MTN MoMo or Airtel Money. Call 0780 285 043.",
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
