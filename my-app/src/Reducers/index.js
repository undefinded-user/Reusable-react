export function globalReducer ( state, action ){
	switch(action.type){
		case "ADD_TO_BASKET": {
			return {...state, basket: [action.payload, ...state.basket]}
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