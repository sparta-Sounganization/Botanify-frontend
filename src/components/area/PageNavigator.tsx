import { PageHeader } from "@/src/types/types";
import PageButton from "../block/PageButton";
import { useEffect, useState } from "react";

export default function PageNavigator({ pageHeader, setPage }: { pageHeader: PageHeader, setPage: React.Dispatch<any> }) {
	const now = pageHeader.number;
	const size = pageHeader.size;
	const totalElements = pageHeader.totalElements;
	const totalPages = pageHeader.totalPages;

	const NAV_SIZE: number = 5;

	const [navPos, setNavPos] = useState(1);
	const [navSize, setNavSize] = useState(1);
	const [firstNav, setFirstNav] = useState(true);
	const [lastNav, setLastNav] = useState(false);

	useEffect(() => {
		setNavSize(Math.trunc(((pageHeader.totalPages - 1) / NAV_SIZE) + 1))
		setFirstNav(navPos == 1)
		setLastNav(navPos == navSize)
		console.log(`네비게이터 크기 = ${navSize}`)
		console.log(`네비게이터 현위치 = ${navPos}`)
		console.log(`처음 네비? = ${firstNav}`)
		console.log(`마지막 네비? = ${lastNav}`)
	}, [navPos, pageHeader])

	return (
		<div className="flex flex-row justify-between my-4">
			<PageButton label="이전" onClick={() => {setNavPos(navPos - 1); setPage(NAV_SIZE * (navPos - 1 - 1) + 1)}} disabled={firstNav} />

			<div className="flex flex-row gap-4 justify-center">
				{
					Array.from({ length: lastNav ? pageHeader.totalPages % NAV_SIZE : 5 }, (_, index) => {
						const buttonNumber = NAV_SIZE * (navPos - 1) + index + 1;
						return (<PageButton key={index} label={`${buttonNumber}`} onClick={() => { setPage(buttonNumber) }} disabled={pageHeader.number + 1 == buttonNumber} />)
					})
				}
			</div>
			
			<PageButton label="다음" onClick={() => {setNavPos(navPos + 1); setPage(NAV_SIZE * (navPos + 1 - 1) + 1)}} disabled={lastNav} />
		</div>
	)
}