import React, { createContext, useReducer } from 'react'
import { data } from './Data' 
import { globalReducer } from '../Reducers'
import { addItem, addFavorites, removeFavorites } from '../Actions'

export const GlobalContext = createContext()

export let GlobalDispatch

const initialState = {
	basket: [],
	favorites: [],
	data
}



export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initialState)
	GlobalDispatch = dispatch
	return (
		<GlobalContext.Provider value={{...state, addItem, addFavorites, removeFavorites}} >
			{ children }
		</GlobalContext.Provider>
	)
}

