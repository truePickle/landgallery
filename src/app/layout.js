import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
const inter = Inter({subsets: ["latin"]});

// TODO: Write a better metadata
export const metadata = {

    title: {
        default: "Gallery",
        template: "%s | Gallery"
    },
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="container">
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
);
}
