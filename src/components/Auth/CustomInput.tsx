import React from 'react'

interface InputProps {
	placeholder?: string
	className?: string
}

const CustomInput: React.FC<InputProps> = ({ placeholder, className }) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={`w-full max-w-[790px] h-[80px] font-inter text-[28px] px-8 py-2 rounded-[50px] bg-white border-[2.3px] border-[#679672] focus:outline-none focus:ring-2 focus:ring-[#679672] shadow-sm text-gray-800 placeholder:font-inter placeholder:font-normal placeholder:text-[#B4B4B4] placeholder:text-[28px] ${className}`}
		/>
	)
}

export default CustomInput
