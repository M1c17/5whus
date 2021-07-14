import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeItem: String;
  setActiveItem: Function;
  name: String;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-green-500"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<String>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('Home');
    else if (pathname === '/whus') setActiveItem('Whus');
    else if (pathname === '/whusers') setActiveItem('Whusers');
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-green-200 md:text-2xl">
        {activeItem}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Home"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Whus"
          route="/whus"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Whusers"
          route="/whusers"
        />
      </div>
    </div>
  );
};

export default Navbar;
