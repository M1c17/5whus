import '../styles/styles.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import Sidebar from '../components/Sidebar';
import IndexPageComponent from '../components/pages/index/index';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-4 px-5 my-5">
      <div className="h-full col-span-12 p-4 bg-white lg:col-span-5">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-pink-100 rounded-lg lg:col-span-7">
        <IndexPageComponent />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
