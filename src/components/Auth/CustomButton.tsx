import React from 'react'

interface ButtonProps {
	children: string
	name?: string
	className?: string
}

const CustomButton: React.FC<ButtonProps> = ({ children, name, className }) => {
	return (
		<button
			name={name}
			className={`w-full max-w-[790px] h-[80px] font-inter text-[28px] px-8 py-2 rounded-[50px] bg-[#679672] text-white ${className}`}>
			{children}
		</button>
	)
}

export default CustomButton
