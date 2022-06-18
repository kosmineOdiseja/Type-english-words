import React, { useState, useContext } from 'react'
import  Reducer  from './context/Reducer'
import { ContextActionType } from './context/Reducer'
import TypingContext  from './context/TypingContext'
import { WordListProps } from './WordList'

// const initialState = {
// 	TypedWord: '',
// }

function InputField() {
  const [typedWord, setTypedWord] = useState('')
// const { TypedWord, setTypedWord } = useContext(TypingContext)
  const [ activeWordIndex, setActiveWordIndex ] = useState(0);
  const [ correctLetter, setCorrectLetter ] = useState([]);	
	const [ userInput, setUserInput ] = useState('')
// console.log(typedWord, 'this is typed word')

const processInput = (value) => {

    if(value.endsWith(' ')) {

      setActiveWordIndex(activeWordIndex + 1);
      setUserInput('');
      } else {
      setUserInput(value)
    }

    // correct word
   setCorrectWordArray(data => {
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWordIndex] = word === words.current[activeWordIndex]
        return newResult
    })
  }

  return (
	<input 
		value={typedWord}
		// type='text'
		placeholder='Type here... '
		className='border-2 border-gray-600 p-2 rounded-md text-xl'
		onChange={(e)=>processInput(e.target.value)}
	>
	</input>
  )
}

export default InputField