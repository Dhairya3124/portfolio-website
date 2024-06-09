import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  //Added localhost url before production
  metadataBase: new URL('https://dhairya-khanna.vercel.app/'),

  title: 'Dhairya',
  authors: {
    name: 'Dhairya'
  },
  description:
    "Based in India, I'm a FullStack Developer passionate about building a modern web application that users love.",
  openGraph: {
    title: 'Dhairya',
    description:
      "Based in India, I'm a FullStack Developer passionate about building a modern web application that users love.",
    url: 'https://dhairya-khanna.vercel.app/',
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
