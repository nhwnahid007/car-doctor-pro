import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import AuthProvider from '../services/AuthProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Car Doctor Pro',
  description: 'For better car repair service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="car-doctor-light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <div className="container mx-auto px-5 lg:px-20">
            <Navbar />
          </div>
          <main className="flex-grow">
            <div className="container mx-auto px-5 lg:px-20">{children}</div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
