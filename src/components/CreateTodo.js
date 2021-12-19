const CreateTodo = ({ onTodoChange, onTodoSubmit, todo }) => {
	function handleSubmit(e) {
		e.preventDefault()

		if (!todo.todo) {
			alert('Please add task')
			return
		}

		console.log(todo)
		onTodoSubmit(todo)
	}


	function handleChange(e) {
		onTodoChange({ todo: e.target.value })
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='mb-5'>
				<label htmlFor='todo' className='font'>
					Enter Todo
				</label>
				<input
					type='text'
					name='todo'
					value={todo.todo}
					onChange={handleChange}
					className='form-control'
					placeholder='Enter Todo'
				/>
				<button
					className='btn btn-lg btn-primary btn-block btn-sm mt-4'
					type='submit'>
					Submit
				</button>
			</form>
		</>
	)
}

export default CreateTodo
