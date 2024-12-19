"use client"

import Image from 'next/image'
import React from 'react'
import search_icon from '@/src/public/svg/search.svg';

export default function SearchBar() {
	return (
		<div className='relative flex flex-grow items-center'>
			<Image src={search_icon} alt="search icon" className='absolute left-3 h-full size-5 opacity-50' />
			<input
				type="text"
				placeholder="검색어 입력"
				className={`
					w-full
					border-2 rounded-2xl
					px-4 pl-9 py-2 my-auto 
					focus:outline-none focus:bg-slate-400 focus:text-white 
					shadow-md 
					transition-all`
				}
			/>
		</div>
	)
}