import React, { useState } from 'react'
import  Reducer  from './context/Reducer'
import { ContextActionType } from './context/Reducer'

const initialState = {
	TypedWord: '',
}

function InputField() {

// const [ TypedWord, setTypedWord ] = React.useState('')
// const [state, dispatch ] = useReducer(Reducer, initialState)


// const handleChange = (e: any ) => {
// 	// console.log(e.target.value, 'handleChange')
// 	dispatch({
// 		type: ContextActionType.SET_TYPED_WORD,
// 		payload: e.target.value,
// 	})

// }
const [ typedWords , setTypedWords ] = useState([])

const handleChange = (e: any ) => {
	// console.log(e.target.value, 'handleChange')
	setTypedWords(e.target.value)

}

// console.log(state, 'state')
  return (
	<textarea 
		// value={state}
		// type='text'
		placeholder='type here'
		className='flex-1 p-2 border-2 border-gray-600 w-full m-auto'
		onChange={(e)=>handleChange(e)}
	>
	
	</textarea>
  )
}

export default InputField