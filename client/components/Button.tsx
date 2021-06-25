import React from 'react';

export default function Button(props: { item: string }) {
  return (
    <button className="flex p-4 px-5 py-4 m-2 mb-2 rounded-lg shadow-xs cursor-pointer bg-gradient-to-r from-pink-100 via-purple-600 to-purple-400 md:mb-0 hover:bg-blue-500 hover:text-gray-100">
      <p className="text-xs font-medium align-center">{props.item}</p>
    </button>
  );
}
