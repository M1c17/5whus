import React from 'react';

export default function FormInput(props: {
  label: string;
  name: string;
  id: string;
  autoComplete: string;
}) {
  return (
    <div className="formInput-wrapper">
      <label className="relative text-gray-500">{props.label}</label>
      <div className="flex flex-col items-center w-full mx-auto">
        <div className="w-full">
          <div className="relative flex flex-col items-center">
            <div className="w-full ">
              <div className="flex p-1 my-2 bg-white border border-gray-200 rounded-lg focus:shadow-outline">
                <div className="flex flex-wrap flex-auto">
                  <div className="flex-1">
                    <input
                      type="text"
                      name={props.name}
                      id={props.id}
                      autoComplete={props.autoComplete}
                      className="w-full h-full p-1 px-2 text-gray-800 bg-transparent outline-none appearance-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
