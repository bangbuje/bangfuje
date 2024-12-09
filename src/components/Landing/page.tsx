import BackgroundOverlay from './BackgroundOverlay'
import AuthButtonGroup from './AuthButtonGroup'
import MainText from './MainText'

export default function LandingPage() {
	return (
		<BackgroundOverlay>
			<div className="absolute inset-0 flex items-center justify-center">
				<AuthButtonGroup />
				<MainText />
			</div>
		</BackgroundOverlay>
	)
}
