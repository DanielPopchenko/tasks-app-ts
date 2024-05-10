import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

interface ITodo {
	taskId: number;
	text: string;
}

interface IInitialState {
	tasks: ITodo[];
}

const initialState: IInitialState = {
	tasks: [],
};

export const tasksSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// ! TASKS
		handleAddTask: (state, action) => {
			const newTask: ITodo = {
				taskId: Math.random(),
				// ! we need to pass it instead of getting it from state
				// projectId: action.payload.selectedProjectId,
				text: action.payload,
			};

			if (action.payload !== '') {
				state.tasks.push(newTask);
			} else {
				Swal.fire({
					title: 'Error!',
					text: 'Please enter some text!',
					icon: 'error',
					confirmButtonText: 'Okay!',
				});
			}
		},

		handleDeleteTask: (state, action) => {
			state.tasks = state.tasks.filter(task => task.taskId !== action.payload);
		},
	},
});

export const { actions, reducer } = tasksSlice;
