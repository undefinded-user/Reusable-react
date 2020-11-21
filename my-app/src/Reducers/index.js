export function globalReducer ( state, action ){
	switch(action.type){
		case "ADD_TO_BASKET": {
			let { basket } = state;
			let indexItem;

			const isInBasket = basket.find((item, index)=> {
				if(item.name === action.payload.name){
					indexItem = index
					return true
				}
				return false
			})

			if(isInBasket){
				let newBasket = [...basket];
				let amountInBasket = newBasket[indexItem].amountInBasket? newBasket[indexItem].amountInBasket + 1 : 1;
				console.log(amountInBasket)
				newBasket[indexItem] = {...newBasket[indexItem], amountInBasket};
				return {...state, basket: newBasket}
			}
			return {...state, basket: [{...action.payload, amountInBasket: 1}, ...state.basket]}
		}
		case "REMOVE_FROM_BASKET": {
			return {...state, basket: state.basket.filter((item)=> item.name !== action.payload.name)}
		}
		case "ADD_TO_FAVORITES": {
			return {...state, favorites: [action.payload, ...state.favorites]}
		}
		case "REMOVE_FROM_FAVORITES": {
			return {...state, favorites: state.favorites.filter((item)=> item.name !== action.payload.name)}
		}
		default: 
			return state
	}
}