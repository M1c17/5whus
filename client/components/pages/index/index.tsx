import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Page from '../index/page';

export default function IndexPageComponent() {
  const [activePage, setActivePage] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActivePage('About');
    else if (pathname === '/news') setActivePage('News');
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-green-600 md:text-2xl">
        {activePage}
      </span>

      <div className="text-base font-normal md:text-xl">
        <Page
          active={activePage}
          setActive={setActivePage}
          name="About"
          route="/"
        />
        <Page
          active={activePage}
          setActive={setActivePage}
          name="News"
          route="/news"
        />
      </div>
    </div>
  );
}
