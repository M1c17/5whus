import React from 'react';
import Avatar from 'next/image';
import FormInput from './form-input';
import Multiselect from './Multiselect';

export default function Form(props: {}) {
  return (
    <main className="sidebar">
      <section className="relative block" style={{ height: '500px' }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-hero">
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-50"
          ></span>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center px-12 py-16 m-16 lg:w-3/12 lg:order-2">
              <div className="relative">
                <Avatar
                  src="/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
                  alt="avatar"
                  className="mx-auto border rounded-full"
                  height="350px"
                  width="350px"
                  layout="intrinsic"
                  quality="100"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: '70px' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col w-full mb-6 -mt-12 break-words bg-white rounded-lg shadow-xl">
            <div className="px-48">
              <form className="mt-2 mb-2" action="#" method="post">
                <div className="mb-2">
                  <FormInput
                    placeholder={'User Name'}
                    name={'name'}
                    id={'name'}
                    autoComplete={'given-name'}
                  />
                </div>
                <div className="mb-2">
                  <Multiselect />
                </div>
                <div className="mb-2">
                  <Multiselect />
                </div>
                <div className="mb-2">
                  <div className="grid w-full grid-cols-3 gap-4">
                    <Multiselect />
                    <Multiselect />
                    <Multiselect />
                  </div>
                </div>
              </form>
              {/* BUTTONS */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
