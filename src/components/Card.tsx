import React, { ReactNode, FC, useState} from 'react'

export enum CardVariants{
	outline="outline",
	primary="primary"

}


interface CardProps{
	width?: string;
	height?: string;
	children: ReactNode;
	variant: CardVariants;
	onClick:(num: number)=> void;
}
const Card: FC <CardProps> = ({width, height,variant,children,onClick}) => {
	const [sost,setSost]=useState(0);
	return(
		<div style={{
			width,height, border: variant==="outline"? "2px solid gray" : "none",
			background: variant==="primary" ? "#EEEEEE": "white"
			}}
			onClick={() => onClick(sost)}
			>
			{children}
		</div>
)
}
export default Card