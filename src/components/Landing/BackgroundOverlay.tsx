import React, { ReactNode } from 'react'

interface BackgroundOverlayProps {
	children: ReactNode
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ children }) => {
	return (
		<div className="bg-[url('/landing.png')] bg-cover bg-center h-screen">
			<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">{children}</div>
		</div>
	)
}

export default BackgroundOverlay
