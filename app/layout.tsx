import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  //Added localhost url before production
  metadataBase: new URL('http://localhost:3000/'),

  title: 'Dhairya',
  authors: {
    name: 'Dhairya'
  },

  openGraph: {
    title: 'Dhairya',
    description:
      "Based in India, I'm a FullStack Developer passionate about building a modern web application that users love.",
    url: 'http://localhost:3000/',
    siteName: 'Dhairya',
    type: 'website'
  },
  keywords: ['dhairya']
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
