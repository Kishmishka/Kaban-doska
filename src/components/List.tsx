import React, { FC, ReactNode } from 'react'
import { TransitionGroup } from 'react-transition-group';

interface ListProps<T>{
	items:T[];
	renderItem: (item:T) => ReactNode;
}


export default function List<T>(props: ListProps<T>){

	return(
		<div>
				{props.items.map(props.renderItem)}
		</div>
	)
}