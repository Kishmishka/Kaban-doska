import { HandySvg } from 'handy-svg'
import logo from '../../../svg/logo.svg'
import './Header.scss'

const Header = () => {
	return(
		<div className="header">
			<h1>Kaban doska</h1>
			<HandySvg 
			src={logo} 
			className="logo" 
			width="45"
        	height="45" /> 
		</div>
)
}
export default Header