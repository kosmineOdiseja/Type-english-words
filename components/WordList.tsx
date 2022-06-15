import { useContext } from 'react'
import TypingContext from './context/TypingContext'

interface WordListProps {
	words: string, 
	meaning: string, 
	sentance: string,
}

function WordList() {
	const { words } = useContext<WordListProps>(TypingContext) 
  return (
	<div>
			{
			words.map((item: WordListProps, index: number) => {
				return (<div className='flex flex-row items-center justify-center text-2xl m-1 p-1 rounded-md bg-darkblue-400 ' key={index}>{item.word}</div>)
			})
		}	
	</div>
  )
}

export default WordList
