import './NavItem.css'

export default function NavItem ({children, reference }) {
	return(
		<div className='navbar__item'>
			<a href={reference}>
				{children}
			</a>
		</div>
	)
}