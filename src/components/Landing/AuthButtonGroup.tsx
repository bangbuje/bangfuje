import Link from 'next/link'

export default function ButtonGroup() {
	return (
		<div className="absolute top-0 right-0 mt-7 mr-8 text-white font-inter font-normal text-[25px]">
			<Link href="/auth/login">
				<span className="text-[#679672] cursor-pointer hover:underline">로그인</span>
			</Link>
			<span className="ml-5">
				<Link href="/auth/register">
					<span className="cursor-pointer hover:underline">회원가입</span>
				</Link>
			</span>
		</div>
	)
}
