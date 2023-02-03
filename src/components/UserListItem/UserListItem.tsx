import React, { FC, useState, useEffect} from 'react'
import { ITodo, IUser } from '../../types/types'
import List from '../List'
import TodoListItem from '../TodoListItem/TodoListItem'
import Button from '../UI/Button/Button'
import "./UserListItem.scss"
import { Transition } from 'react-transition-group';
import { stat } from 'fs'
import CompleteTaskElem from '../CompleteTaskElem'

interface UserListItemProps{
	user:IUser;
	todos:ITodo[];
	setTodos:(todos:ITodo[]) => void
}

function stratFilter(
	todos:ITodo[],
	user:IUser,
	setComlitedTask:(complited:ITodo[])=>void, 
	setCountTask:(tasks:number)=>void){
	const stage1 = [...todos.filter(todo => todo.userId===user.id)]
	const stage2 = [...stage1.filter(todo=> todo.completed===true)]
	let countComlited=stage2.length
	setComlitedTask(stage2)
	setCountTask(countComlited)
}


const UserListItem: FC<UserListItemProps> = ({user,todos,setTodos}) => {
	const [active, setActive]= useState(false)
	const [countTask, setCountTask] = useState<number>(0)
	const [complitedTask, setComlitedTask]=useState<ITodo[]>([])
	const [check, setChek]= useState()

	useEffect(()=>{stratFilter(todos,user,setComlitedTask,setCountTask)},[])
	return(
		
		<div 
		className='userCard'
		
		>
			<div className="userCard_info">
				<div className="countTask">
					{countTask}
				</div>
				<div className="infoUser" onClick={()=>{setActive(!active)}}>
					<div className='infoUser_name'>Name: {user.name}</div>
					<div className="infoUser_city">City: {user.address.city}</div>
					<div className="infoUser_street">Street: {user.address.street}</div>
				</div>
				
				<Button
				onClick={()=>{
					console.log('sada')
					const newTask = prompt("Новое задание для кабанчика:");
					if(newTask){
						setTodos([...todos,{
							userId: user.id,
							id: Date.now(),
							title: newTask,
							completed:false,
						}])
					}
				}}>Add task</Button>
			</div>
			<Transition
			in={active}
			timeout={250}
			mountOnEnter
			unmountOnExit
			>
				{state=><div className={`userCard_tasks ${state}`} >
					<List 
					items={todos.filter(todo => todo.userId===user.id)}
					renderItem={(todo:ITodo)=>
					<TodoListItem
					countTask={countTask} 
					setComlitedTask={setComlitedTask}
					complitedTask={complitedTask}
					setCountTask={setCountTask} 
					setTodos={setTodos} 
					todos={todos} 
					todo={todo} 
					key={todo.id}/>}/>
					
					<div className="comlitedTasks">
						<List 
						items={complitedTask}
						renderItem={(todo:ITodo)=><CompleteTaskElem
						todo={todo} 
						key={todo.id}/>}/>
					</div>
					
				</div>}
				
			</Transition>
			
		</div>
		
		
)
}
export default UserListItem