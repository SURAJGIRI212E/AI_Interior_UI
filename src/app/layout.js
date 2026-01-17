import { Inter } from '@next/font/google'
import "./globals.css";
import Navbar from '@/Component/Navbar';
import { Footer } from '@/Component/Footer';

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "InteriorAI",
  description: "Transform Your Space with AI Magic, Upload a photo of your room and get personalized design suggestions to make it beautiful, functional, and uniquely yours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body
        className={`${interSans.variable}  antialiased`}
      >
        <div className="px-20 max-w-7xl mx-auto">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
