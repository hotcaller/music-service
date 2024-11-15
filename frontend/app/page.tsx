import DiscoverTab from '@/components/DiscoverTab';
import NowPlaying from '@/components/NowPlaying';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '900'],
});

export default function Home() {
  return (
    <main className={`${poppins.variable} font-sans flex`}>
      <DiscoverTab />
      <NowPlaying />
    </main>
  );
}
