import React from 'react'
import "./Button.scss"
import {FC} from 'react'

interface ButtonProps{
	children?:string;
	onClick?:()=>void
}

const Button: FC<ButtonProps> = ({children,onClick}) => {
	
	return(
		<div className='Button'
		onClick={onClick}
		>
			{children}
			
		</div>
)
}
export default Button