import{createContext, useState, useEffect } from 'react'

interface TypingContextProps {
	word: string,
	meaning: string,

}
export type TypingContextType = {
	// word: string,
	// todos: 

} 

// https://www.youtube.com/watch?v=bmxQzJHFCV8&ab_channel=Techbase
//https://github.com/MitchelSt/context-api-ts-snippet/blob/main/README.md

const TypingContext = createContext<TypingContextProps[]| null>(null)

export const TypingProvider = ({ children }: any   ) => {
	
	const [ words, setWords ] = useState<TypingContextProps[] | null | any >([])


	console.log(words, 'this is words from TypingProvider.tsx')
	useEffect(() => {
		fetchWords()
	}, [])

	const fetchWords = async () => {
		const response = await fetch('http://localhost:3004/words?_sort=id&_order=desc')
		const data = await response.json()
		console.log(data, 'words list from context ')
		setWords(data)
	}

	return (
		<TypingContext.Provider value={{words}}>
			{ children }
		</TypingContext.Provider>
	)
}

export default TypingContext 