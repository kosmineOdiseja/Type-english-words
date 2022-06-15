import React from 'react'

function InputField() {

	const [ TypedWord, setTypedWord ] = React.useState('')

  return (
	<textarea 
		value={TypedWord}
		placeholder='type here'
		className='w-full h-1/5 border-solid border-red-600 m-4'
		onChange={(e) => setTypedWord(e.target.value)}
	>
	
	</textarea>
  )
}

export default InputField