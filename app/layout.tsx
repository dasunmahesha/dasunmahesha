import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dasun Mahesha - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}