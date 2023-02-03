import axios from 'axios';
import { useState, useEffect } from 'react';
import Card, { CardVariants } from './components/Card';
import List from './components/List';
import TodoListItem from './components/TodoListItem/TodoListItem';
import UserListItem from './components/UserListItem/UserListItem';
import { ITodo, IUser } from './types/types';
import Header from './components/UI/Header/Header';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


function App() {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])
	
	useEffect(()=>{
		fetchusers()
		fetcTodo()
	},[])
	
	async function fetchusers() {
		try{
			const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(responce.data)
		}
		catch(e){
			alert(e)
		}
	}

	async function fetcTodo() {
		try{
			const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
			setTodos(responce.data)
		}
		catch(e){
			alert(e)
		}
	}

  return (
    <div className="App">
		<Header/>
		<List 
		items={users} 
		renderItem= {(user:IUser) => <UserListItem setTodos={setTodos} todos={todos} user={user} key={user.id}/>}/>
    </div>
  );
}

export default App;
