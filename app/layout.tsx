import type { Metadata } from 'next';
import './globals.css';
import { Anek_Odia } from 'next/font/google';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';
const anekOdia = Anek_Odia({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-anek-odia',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anekOdia.variable} antialiased font-anek-odia`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
