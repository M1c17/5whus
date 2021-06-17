import React from 'react';

interface Props {}

export default function Footer(props: {}) {
  return (
    <div className="py-10 mt-10 text-center border-t border-gray-300">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-9/12">
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <a
            href="#pablo"
            className="font-normal text-pink-500"
            onClick={(e) => e.preventDefault()}
          >
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
