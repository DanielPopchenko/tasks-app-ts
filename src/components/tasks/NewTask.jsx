import { useState } from 'react';
import Button from '../UI/Button';
import { useActions } from '../../hooks/useActions';

const NewTask = () => {
	// onAddTask={handleAddTask} onDeleteTask={onDeleteTask}

	const { handleAddTask } = useActions();
	const [enteredTask, setEnteredTask] = useState('');

	const handleChange = e => {
		setEnteredTask(e.target.value);
	};

	const handleClick = () => {
		setEnteredTask('');
		handleAddTask(enteredTask);
	};

	return (
		<div className='flex items-center gap-2'>
			<input
				type='text'
				className='w-64 px-2 py-2 rounded-md bg-stone-200'
				onChange={e => handleChange(e)}
				// ! don`t forget to add value (bind it)
				value={enteredTask}
			/>
			<Button onClick={handleClick}>Add task</Button>
		</div>
	);
};

export default NewTask;
