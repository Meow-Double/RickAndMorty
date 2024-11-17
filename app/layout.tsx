import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/src/components/layout';
import '../styles/globals.css';
import '../styles/typography.css';
import { TRPCProvider } from '@/src/utils/hooks';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Rick and Morty',
  description: 'The Rick and Morty lesson next app',
};

interface RootLayoutProps {
  children: React.ReactElement;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>
          <Header />
          <main className="container">{children}</main>
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
