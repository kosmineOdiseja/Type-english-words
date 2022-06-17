import React from 'react'

function Word({ word }: any ) {
  return (
	<div 
	 className='flex items-center justify-center text-2xl m-1 p-1 rounded-md bg-darkblue-400 

	 '>
		{word}
	</div>
  )
}

export default Word