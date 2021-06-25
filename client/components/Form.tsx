import React from 'react';
import FormInput from './Form-input';
import Multiselect from './Multiselect';
import Button from './Button';
import { Languages, ProblemDifficulty } from '../../lib/data-types';

export default function Form(props: {}) {
  const Languages = [
    { tag: 'C', id: 0 },
    { tag: 'Java', id: 1 },
    { tag: 'Python', id: 2 },
  ];
  return (
    <section className="relative py-2 bg-gray-300">
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col w-full mb-6 bg-white rounded-lg shadow-xl">
          <div className="px-6 m-4">
            <form className="mt-2 mb-2" action="#" method="post">
              <div className="mt-2 mb-2">
                <FormInput
                  label={'User Name'}
                  name={'name'}
                  id={'name'}
                  autoComplete={'given-name'}
                />
              </div>
              <div className="mt-2 mb-2">
                <Multiselect
                  label={'Language Preferences'}
                  options={[Languages[0].tag]}
                />
              </div>
              <div className="mt-2 mb-2">
                <Multiselect
                  label={'Problem Difficulty'}
                  options={[Languages[0].tag]}
                />
              </div>
              <div className="mt-2 mb-2">
                <div className="grid w-full grid-cols-3 gap-4">
                  <Multiselect label={'City'} options={[Languages[0].tag]} />
                  <Multiselect label={'State'} options={[Languages[0].tag]} />
                  <Multiselect
                    label={'Time Zone'}
                    options={[Languages[0].tag]}
                  />
                </div>
              </div>
              <div className="mt-2 m-b-2">
                <label className="relative text-gray-500">
                  Something short to say before push ?
                </label>
                <textarea className="w-full h-16 p-1 my-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>
              </div>
            </form>
            {/* BUTTONS */}
            <div className="flex flex-row-reverse items-center">
              {/* TODO: This buttom push post - this user does not have an account, So the template of post will not be saved just publish for temporary time */}
              <Button item={'PUSH'} />
              <Button item={'CANCEL'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
