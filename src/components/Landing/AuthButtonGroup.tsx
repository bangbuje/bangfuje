import Link from 'next/link'

export default function ButtonGroup() {
	return (
		<div className="mt-7 font-inter text-[25px] absolute top-0 right-0 mr-8 font-normal text-white">
			<Link href="/auth/login">
				<span className="text-[#679672] hover:underline cursor-pointer">로그인</span>
			</Link>
			<span className="ml-5">
				<Link href="/auth/register">
					<span className="hover:underline cursor-pointer">회원가입</span>
				</Link>
			</span>
		</div>
	)
}
