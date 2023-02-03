import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ITodo } from '../../types/types';
import star from '../../svg/star.svg';
import { HandySvg } from 'handy-svg';
import "./TodoLitsItem.scss"

interface TodoListItemProps{
	todo:ITodo;
	todos:ITodo[];
	countTask:number;
	complitedTask:ITodo[];
	setTodos:(todos:ITodo[]) => void;
	setCountTask:(count:number) => void;
	setComlitedTask:(todos:ITodo[])=>void;
}


const TodoListItem: FC<TodoListItemProps> = ({todo, setTodos,todos,setCountTask,countTask,setComlitedTask,complitedTask}) => {
	
	

	return(
		<div className='TodoListItem'
		onClick={()=>{
			setComlitedTask([...complitedTask, todo])
			setCountTask(countTask+=1)
			setTodos([...todos.filter(todos=>todos.id !== todo.id)])
		 } 
		}
		>
			<HandySvg 
			src={star} 
			className="logo" 
			width="10"
        	height="10" /> {todo.title} 
		</div>
		
)
}
export default TodoListItem