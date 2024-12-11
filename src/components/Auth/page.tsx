import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

export default function RegisterPageComp() {
	return (
		<div>
			<div className="font-inter text-[70px] text-[#679672] mt-[86px] p-0 font-semibold text-center">회원가입</div>
			<div className="sm:px-8 md:px-12 flex flex-col items-center justify-center w-full px-4">
				<CustomInput className="mt-8" placeholder="이름" />
				<CustomInput className="mt-6" placeholder="아이디" />
				<CustomInput className="mt-6" placeholder="비밀번호" />
				<div className="max-w-[790px] font-inter text-[20px] text-[#9E9E9E] w-full px-8 py-2 font-normal text-left">
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
