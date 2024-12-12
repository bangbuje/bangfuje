import Header from '../Header'
import Sidebar from '../Sidebar'
import SearchBar from '../SearchBar'

export default function UserLogPageComp() {
	return (
		<div className="flex flex-col h-screen">
			<Header username="정소울" />
			<div className="flex flex-grow">
				<Sidebar />
				<div className="flex-grow bg-white">
					<div className="ml-28 w-auto h-auto mt-16">
						<div className="text-[#7B7B7B] font-inter text-5xl font-bold leading-none">사용기록</div>
						<SearchBar />
					</div>
				</div>
			</div>
		</div>
	)
}
