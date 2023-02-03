import React, { FC, useState } from 'react'
import { ITodo } from '../types/types'
import star from '../svg/star.svg'
import { HandySvg } from 'handy-svg'

interface CompleteTaskElemProps{
	todo:ITodo;
	
}
const CompleteTaskElem:FC<CompleteTaskElemProps> = ({todo}) => {
	
	return(
		
		<div>
			<HandySvg 
			src={star} 
			className="logo" 
			width="10"
        	height="10" /> {todo.title} 
		</div>
)
}
export default CompleteTaskElem