import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Marco Sarro Detailing - Cura Professionale Auto',
  description: 'Centro specializzato in detailing auto, lucidatura, protezione ceramica e trattamenti professionali per la tua auto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${manrope.variable} font-body bg-base text-onLight antialiased`}>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
