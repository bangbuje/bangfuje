import Header from '../Header'
import Sidebar from '../Sidebar'

export default function UserInfoPageComp() {
	return (
		<div className="flex flex-col h-screen">
			<Header username="정소울" />
			<div className="flex flex-grow">
				<Sidebar />
				<div className="flex-grow bg-white">
					<div className="ml-28 w-auto h-auto mt-16">
						<div className="text-[#7B7B7B] font-inter text-5xl font-bold leading-none">사용정보</div>
					</div>
				</div>
			</div>
		</div>
	)
}
