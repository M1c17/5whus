import React from 'react';
import Image from 'next/image';
import Form from './Form';
import Headerprofile from './Headerprofile';

export default function Sidebar() {
  return (
    <>
      <main className="sidebar">
        {/* FRIENDS - EDITPROFILE */}
        <Headerprofile />
        <Form />
        {/* NAVBAR */}
      </main>
    </>
  );
}
