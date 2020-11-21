import './Favorites.css'
import { GlobalContext } from '../../Context/GlobalProvider'
import { useContext } from 'react'

export default function Favorites () {
	const { favorites } = useContext(GlobalContext);

	return(
		<div className='favorites'>
			<i className="far fa-heart"></i>
			<div style={{'display' : favorites.length? 'inline-block' : 'none'}} className='favorites__amount'>
				{favorites.length}
			</div>
		</div>
	)
}