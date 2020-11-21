import './Subheader.css'
import Cart from '../Cart'
import Favorites from '../Favorites'
export default function Subheader(){
	return(
		<div className='subheader'>
			< Favorites />
			< Cart />
		</div>
	)
}
