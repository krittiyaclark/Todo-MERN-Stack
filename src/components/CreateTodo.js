import { useState } from 'react'

const CreateTodo = ({ onTodoChange, onTodoSubmit, todo }) => {
	const [todos, setTodos] = useState([])

	function handleSubmit(e) {
		e.preventDefault()
		console.log(todo)
		onTodoSubmit(todo)
		setTodos([])

		if (!todos) {
			alert('Please add task')
			return
		}
	}

	function handleChange(e) {
		onTodoChange({ item: e.target.value })
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='todo'>Enter Todo</label>
				<input
					type='text'
					name='todo'
					value={todo.item}
					onChange={handleChange}
					className='form-control'
					placeholder='Enter Todo'
				/>
				<button className='btn btn-lg btn-primary btn-block' type='submit'>
					Submit
				</button>
			</form>
		</>
	)
}

export default CreateTodo
