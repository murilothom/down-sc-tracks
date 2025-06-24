import { cookies } from 'next/headers';
import React from 'react';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const cookieTheme = cookieStore.get('theme')?.value;
  const initialMode = cookieTheme === 'dark' ? 'dark' : 'light';

  return (
    <html lang="pt-BR" data-theme={initialMode}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3759430482840974" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3759430482840974"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
        <ClientThemeProvider initialMode={initialMode}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
