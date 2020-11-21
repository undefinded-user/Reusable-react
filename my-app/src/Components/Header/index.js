import React from 'react'
import './Header.css'
export default function({children}){
	return (
		<div className='header'>
			{children}
		</div>
	)
}