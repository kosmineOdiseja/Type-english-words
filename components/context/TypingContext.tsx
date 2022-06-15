import{createContext, useEffect, useReducer } from 'react'
import  Reducer  from './Reducer'
import { ContextActionType } from './Reducer'



// https://www.youtube.com/watch?v=bmxQzJHFCV8&ab_channel=Techbase
//https://github.com/MitchelSt/context-api-ts-snippet/blob/main/README.md
const TypingContext = createContext< null| any >(null)

const initialState = {
	words: [],
}

export const TypingProvider = ({ children }: any) => {


const  [state, dispatch] = useReducer(Reducer, initialState)  

	

	useEffect(() => {
		fetchWords()
	}, [])

	const fetchWords = async () => {
		const response = await fetch('http://localhost:3004/words?_sort=id&_order=desc')
		const data = await response.json()
		console.log(data, 'words list from context ')
		
		dispatch({
			type: ContextActionType.SET_WORDS,
			payload: data,
		})

	}

	return (
		<TypingContext.Provider value={{
			words: state.words,
		}}>
			{ children }
		</TypingContext.Provider>
	)
}

export default TypingContext 