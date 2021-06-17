import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function Multiselect() {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  const [items, setItems] = useState<string[]>(['Easy', 'Medium', 'Hard']);
  // contains selected items
  const [selectedItems, setSelected] = useState([]);

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };
  // adds new item to multiselect
  const addTag = (item: any) => {
    setSelected(selectedItems.concat(item));
    setDropdown(false);
  };
  // removes item from multiselect
  const removeTag = (item: any) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };

  return (
    <div className="autcomplete">
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="w-full">
          <div className="relative flex flex-col items-center">
            <div className="w-full ">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                <div className="flex flex-wrap flex-auto">
                  {selectedItems.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center px-2 py-1 m-1 font-medium text-teal-700 bg-white bg-teal-100 border border-teal-300 rounded-full "
                      >
                        <div className="flex-initial max-w-full text-xs font-normal leading-none">
                          {tag}
                        </div>
                        <div className="flex flex-row-reverse flex-auto">
                          <div onClick={() => removeTag(tag)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 ml-2 rounded-full cursor-pointer feather feather-x hover:text-teal-400"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex-1">
                    <input
                      placeholder=""
                      className="w-full h-full p-1 px-2 text-gray-800 bg-transparent outline-none appearance-none"
                    />
                  </div>
                </div>
                <div
                  className="flex items-center w-8 py-1 pl-2 pr-1 text-gray-300 border-l border-gray-200"
                  onClick={toogleDropdown}
                >
                  <button className="w-6 h-6 text-gray-600 outline-none cursor-pointer focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 feather feather-chevron-up"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {dropdown ? (
            <Dropdown list={items} addItem={addTag}></Dropdown>
          ) : null}
        </div>
      </div>
    </div>
  );
}
