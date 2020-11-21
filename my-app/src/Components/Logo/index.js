import logo from '../../imgs/apple-logo.png'
import './Logo.css'
export default function Logo(){
	return(
		<div className='logo'>
			<img className='logo__img' src={logo} alt='apple-logo'/>
			<p className='logo__text'>AppleStore</p>
		</div>
	)
}