import '../styles/styles.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import Sidebar from '../components/Sidebar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-4 px-5 my-5">
      <div className="h-full col-span-12 p-4 bg-white">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

const links = [
  {
    href: '/new',
    text: 'New',
  },
  {
    href: '/about',
    text: 'About',
  },
];
