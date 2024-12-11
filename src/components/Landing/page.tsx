import BackgroundOverlay from './BackgroundOverlay'
import AuthButtonGroup from './AuthButtonGroup'
import MainText from './MainText'
import DownArrow from './DownArrow'

export default function LandingPageComp() {
	return (
		<BackgroundOverlay>
			<div className="absolute inset-0 flex items-center justify-center">
				<AuthButtonGroup />
				<MainText />
				<DownArrow />
			</div>
		</BackgroundOverlay>
	)
}
