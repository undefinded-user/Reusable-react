import React, { createContext } from 'react'
import { data } from './Data'

export const GlobalContext = createContext()

const value = {
	bucket: [],
	data
}

export const GlobalProvider = ({ children }) => {
	return (
		<GlobalContext.Provider value={value}>
			{ children }
		</GlobalContext.Provider>
	)
}

