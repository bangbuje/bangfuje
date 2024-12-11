import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

export default function RegisterPageComp() {
	return (
		<div>
			<div className="text-[#679672] font-inter font-semibold text-[70px] text-center p-0 mt-[86px]">회원가입</div>
			<div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-12">
				<CustomInput className="mt-8" placeholder="이름" />
				<CustomInput className="mt-6" placeholder="아이디" />
				<CustomInput className="mt-6" placeholder="비밀번호" />
				<div className="w-full max-w-[790px] text-left font-inter font-normal text-[20px] text-[#9E9E9E] px-8 py-2">
					영어와 특수문자를 포함한 8~12자의 비밀번호를 입력하세요
				</div>
				<CustomInput className="mt-4" placeholder="학교 이메일 ex) 2020013@bssm.hs.kr" />
				<CustomButton className="mt-11" name="register">
					회원가입
				</CustomButton>
			</div>
		</div>
	)
}
