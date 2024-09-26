import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display } from 'next/font/google';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';

const anekOdia = Playfair_Display({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-anek-odia',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keshari Enterprises',
  description:
    'Welcome to Keshari Enterprises, your trusted partner in bearing solutions. We offer a wide range of services including bearing refurbishment, bearing repair, bearing maintenance, and more.',
  keywords:
    'bearing refurbishment, bearing repair, bearing maintenance, bearing solutions, Keshari Enterprises, bearing manufacturers, bearing suppliers, bearing distributors, bearing manufacturers in India, bearing suppliers in India, bearing distributors in India, bearing manufacturers in Ahmedabad, bearing suppliers in Ahmedabad, bearing distributors in Ahmedabad, bearing manufacturers in Gujarat, bearing suppliers in Gujarat, bearing distributors in Gujarat, bearing manufacturers in India, bearing suppliers in India, bearing distributors in India, bearing manufacturers in Ahmedabad, bearing suppliers in Ahmedabad, bearing distributors in Ahmedabad, bearing manufacturers in Gujarat, bearing suppliers in Gujarat, bearing distributors in Gujarat',
  openGraph: {
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Keshari Enterprises',
      },
    ],
  },
  icons: {
    icon: '/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.png'],
  },
  authors: [{ name: 'Harjot Singh Rana', url: 'https://harjot.pro' }],
  robots: {
    index: true,
    follow: true,
  },
  category: 'industry',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Harjot Singh Rana',
  publisher: 'Harjot Singh Rana',
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
