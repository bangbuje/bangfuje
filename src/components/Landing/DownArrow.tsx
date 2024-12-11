import React from 'react'
import Link from 'next/link'

export default function DownArrow() {
	return (
		<Link href="/auth/login">
			<div className="cursor-pointer">
				<img src="/downArrow.svg" alt="Down Arrow" className="bottom-8 animate-float absolute inset-x-0 w-16 h-auto mx-auto" />
			</div>
		</Link>
	)
}
