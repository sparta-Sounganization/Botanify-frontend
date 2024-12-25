"use client";

import React from 'react';

export default function DefaultSubmitButton(
  { label }
  : { label: string, onClick: VoidFunction } | any
) {
  return (
    <button
      type='submit'
      className={`
        bg-green-600 hover:opacity-30 
        disabled:bg-gray-300 hover:disabled:opacity-100
        transition-all
        py-2 px-4 rounded-2xl
        hidden md:flex
        whitespace-nowrap
        my-auto 
        place-content-center text-white
    `}>
      {label}
    </button>
  );
}
