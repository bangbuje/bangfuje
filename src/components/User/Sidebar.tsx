'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	const pathname = usePathname()

	const links = [
		{ href: '/user/log', label: '사용기록' },
		{ href: '/user/info', label: '사용정보' },
	]

	return (
		<div className="bg-[#F3F3F3] w-72 gap-14 flex flex-col flex-shrink-0 pt-40 pl-16">
			{links.map((link) => (
				<Link key={link.href} href={link.href}>
					<span
						className={`hover:underline h-9 font-inter w-24 text-2xl font-semibold leading-none text-center cursor-pointer ${
							pathname === link.href ? 'text-[#679672]' : 'text-[#7B7B7B]'
						}`}>
						{link.label}
					</span>
				</Link>
			))}
		</div>
	)
}
