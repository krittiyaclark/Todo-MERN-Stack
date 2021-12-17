import { useState } from 'react'

const CreateTodo = ({ onTodoChange, onTodoSubmit, todos }) => {
	const [todo, setTodo] = useState([])

	function handleSubmit(e) {
		e.preventDefault()
		console.log(todos)
		onTodoSubmit(todos)
		setTodo([])

		if (!todos) {
			alert('Please add task')
			return
		}
	}

	function handleChange(e) {
		onTodoChange({ todo: e.target.value })
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='todo'>Enter Todo</label>
				<input
					type='text'
					name='todo'
					value={todo.todo}
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
