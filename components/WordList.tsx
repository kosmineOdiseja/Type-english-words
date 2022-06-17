import { useContext, useState, useRef } from 'react'
import TypingContext from './context/TypingContext'
import Word from './Word' 

export interface WordListProps {
	word: string, 
	meaning: string, 
	sentance: string,
}

function WordList({ typedWord}: any) {
	const { words } = useContext(TypingContext) 

	const [ activeWordIndex, setActiveWordIndex ] = useState(0)
	const [ correctWordArray, setCorrectWordArray ] = useState([])


	// this is for random the word list 
	// const doWordsRandom = () =>  words.word.split(' ' ).sort(() => Math.random() > 0.5 ? 1 : -1)
	// const randomWords = doWordsRandom()
	// const randomWords = useRef(doWordsRandom())
	// console.log(randomWords, 'this is random words')

	
	const handleTypedWord = (value: string) => {



	}

	// console.log(words, 'this is words')
  return (
	<div>
			{
			// randomWords.map((item: WordListProps, index: number) => {
			words.map((item: WordListProps, index: number) => {
				return (<Word  
							key={index}
							word={item.word}
						/>)

			})
		}	
	</div>
  )
}

export default WordList
