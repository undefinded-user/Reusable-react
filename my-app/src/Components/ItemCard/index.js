import React, { useState } from 'react'
import './ItemCard.css'
import img from '../../imgs/iphone12.jpg'
export default function ItemCard ({data}){
	//Grab information from props
	let {isLatest, isBestSeller, price, prevPrice, name} = data;
	//Function that takes number and return price
	const formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	  minimumFractionDigits: 2
	})
	//Format our price variable
	price = formatter.format(price);
	if(prevPrice) prevPrice = formatter.format(prevPrice);
	//Create ouwn state
	const [isFavorite, setIsFavorite] = useState(false);
	//Create JSX elements, that will use in conditional rendering
	const Latest = <span className='item-card__dopinfo item-card__dopinfo_latest'>latest</span>
	const BestSeller = <span className='item-card__dopinfo item-card__dopinfo_bestseller'>bestseller</span>
	const Favorite = <span 
						className='item-card__dopinfo_favorite item-card__dopinfo'
						style={{'color': isFavorite? 'hsl(0, 60%, 50%)' : '', 'display': isFavorite? 'inline-block' : ''}}
						onClick={()=> setIsFavorite(!isFavorite)}

					 >
						❤
					 </span>
	return (
		<div className='item-card'>
			<div className='item-card__container'>
				<div className='item-card__header'>
					{isLatest&&Latest}
					{isBestSeller&&BestSeller}
					{Favorite}
				</div>
				<div className='item-card__body'>
					<img src={img } className='item-card__img' alt={`${name}`}/>

					<p className='item-card__dsc'>{name}</p>
					<span className='item-card__price'>{price}</span>
					{prevPrice&&<span className='item-card__prevPrice'>{prevPrice}</span>}
				</div>
				<div className='item-card__footer'>
					<div>
						<a className='item-card__ref bold' href='#'>
							Buy
						</a>
						<a className='item-card__ref' href='#'>
							Buy one click
						</a>
					</div>
					<div>
						<a className='item-card__ref grey' href='#'>
							Compare
						</a>
					</div>				
				</div>
			</div>			
		</div>
	)
} 

