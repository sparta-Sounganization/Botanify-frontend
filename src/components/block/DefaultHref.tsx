"use client";

import React from 'react';

export default function DefaultHref(
  { label, disabled, href }
  : { label: string, onClick: VoidFunction, disabled: boolean, href: string } | any
) {
  return (
    <a
      href={!disabled ? href : undefined}
      className={`
		bg-green-600 hover:opacity-30 
		disabled:bg-gray-300 hover:disabled:opacity-100
		transition-all
		py-2 px-4 rounded-2xl
    hidden md:flex
    whitespace-nowrap
		my-auto 
		place-content-center text-white
    ${disabled ? "grayscale opacity-30 shadow-none" : ""}
	`}
      style={disabled ? { pointerEvents: 'none' } : {}}
      tabIndex={disabled ? -1 : 0} // disabled 상태에서 tabIndex -1로 설정하여 키보드 포커스도 방지
    >
      {label}
    </a>
  );
}
