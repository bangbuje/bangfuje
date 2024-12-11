import React from 'react'
import Link from 'next/link'

export default function DownArrow() {
	return (
		<Link href="/auth/login">
			<div className="cursor-pointer">
				<img src="/downArrow.svg" alt="Down Arrow" className="absolute inset-x-0 bottom-8 mx-auto w-16 h-auto animate-float" />
			</div>
		</Link>
	)
}
