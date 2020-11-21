import { useState } from 'react'

import './Navbar.css'
export default function Navbar ({children}){
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div onClick={()=>setIsOpen(!isOpen)} className={isOpen? 'navbar open' : 'navbar'}>
			<div className='navbar__menuBtn'>
				<div className='navbar__burgerBtn'>
				</div>
			</div>
			<div className='navbar__content'>
				{children}
			</div>
		</div>
	)
}