import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components';
import React from 'react';

export const metadata: Metadata = {
  title: 'Music service',
  description: 'Discover New Music',
};
const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
if (theme) {
  console.log(`Current theme: ${theme}`);
} else {
  console.log('No theme found, defaulting to light');
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${theme}`}>
      <body className="main-container">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
