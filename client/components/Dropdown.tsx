import React from 'react';

export default function Dropdown(props: {
  list: string[];
  addItem: (item: any) => any;
}) {
  return (
    <div
      id="dropdown"
      className="absolute z-40 w-full overflow-y-auto bg-white rounded shadow top-100 lef-0 max-h-select "
    >
      <div className="flex flex-col w-full">
        {props.list.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-teal-100"
              onClick={() => props.addItem(item)}
            >
              <div className="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:border-teal-100">
                <div className="flex items-center w-full">
                  <div className="mx-2 leading-6 ">{item}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
