import Image from 'next/image'

interface HeaderProps {
	username: string
}

export default function Header({ username }: HeaderProps) {
	return (
		<div className="shrink-0 bg-[#679672] flex items-center justify-between w-full h-20 px-4">
			<div className="font-inter w-24 ml-4 text-2xl font-semibold leading-none text-center text-white">사용자</div>
			<div className="flex items-center ml-auto mr-6 space-x-4">
				<div className="font-inter mr-2 text-2xl font-semibold leading-none text-center text-white">{username}님</div>
				<div className="cursor-pointer">
					<Image src="/outButton.svg" alt="Out Button" width={32} height={32} />
				</div>
			</div>
		</div>
	)
}
