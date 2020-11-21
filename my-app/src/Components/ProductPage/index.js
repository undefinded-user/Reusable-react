import './ProductPage.css'
export default function ProductPage({children}){
	return (
		<div className='product-page'>
			<div className='product-page__container'>
				{children}
			</div>
		</div>
	)
}