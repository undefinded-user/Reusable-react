import { GlobalDispatch } from '../Context/GlobalProvider'

export const addItem = (item) => GlobalDispatch({type: "ADD_TO_BASKET", payload: item})
export const addFavorites = (item) => GlobalDispatch({type: "ADD_TO_FAVORITES", payload: item})
export const removeFavorites = (item) => GlobalDispatch({type: "REMOVE_FROM_FAVORITES", payload: item})