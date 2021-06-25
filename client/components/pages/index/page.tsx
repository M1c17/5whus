import React from 'react';
import Link from 'next/link';

interface Props {
  active: string;
  setActive: Function;
  name: string;
  route: string;
}

export default function page(props: Props) {
  return props.active !== props.name ? (
    <Link href={props.route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
          onClick={() => props.setActive(props.name)}
        >
          {props.name}
        </span>
      </a>
    </Link>
  ) : null;
}
