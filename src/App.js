import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Navigationbar from './components/Navbar'
import Todos from './components/Todos'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		await fetch('/api/todos')
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				let items = data
				console.log(items)
				setTodos(items.todos[0].item)
			})
			.catch((err) => {
				console.error('Error fetching data: ' + err)
			})
	}

	return (
		<Layout>
			<Router>
				<Navigationbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/todos' element={<Todos />} />
				</Routes>
			</Router>
			<p>{todos}</p>
		</Layout>
	)
}

export default App
