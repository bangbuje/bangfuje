import Image from 'next/image'

export default function SearchBar() {
	return (
		<div className="w-[1280px] bg-[#F4F3F3] pr-18 flex items-center gap-5 p-4 pl-6 mt-10 rounded-lg">
			<Image src="/search.svg" alt="Search Icon" width={32} height={32} />
			<input
				className="font-inter placeholder:text-[#AEAEB2] placeholder:font-inter placeholder:text-2xl placeholder:leading-none placeholder:font-normal w-full text-2xl font-normal leading-none bg-transparent outline-none"
				type="text"
				placeholder="검색"
			/>
		</div>
	)
}
