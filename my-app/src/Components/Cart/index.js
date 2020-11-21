import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider'
import './Cart.css'
import cart from '../../imgs/shopping-cart.svg'

export default function Cart (){
	const { basket } = useContext(GlobalContext);
	let amount = basket.reduce((result, item)=>{
		if(item.amountInBasket){
			return result + item.amountInBasket
		} else {
			return result + 1
		}
	}, 0 )
	return(
		 	<div className="cart">
				<i  className="fas fa-shopping-cart"></i>
				<div style={{'display' : amount? 'inline-block' : 'none'}} className='cart__amount'>
					{amount}
				</div>
			</div>
	)
}