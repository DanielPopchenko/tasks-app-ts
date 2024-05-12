import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

// title: enteredTitle,
//             description: enteredDescription,
//             dueDate: enteredDueDate,

export interface IProject {
	id: undefined | null | number;
	title: string;
	description: string;
	dueDate: string;
}

interface IInitialState {
	selectedProjectId: undefined | null | number;
	projects: IProject[];
}

const initialState: IInitialState = {
	// undefined means that we are doing nothing
	selectedProjectId: undefined,
	projects: [],
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		handleStartingProject: (state, action) => {
			console.log(action);
			console.log('handleStartingProject');
			state.selectedProjectId = null;
		},

		handleAddProject: (state, action) => {
			console.log('action: ', action.payload);
			console.log('handleAddProject');

			const newProject = {
				// ! we should pass it through props
				id: Math.random(),
				title: action.payload.title,
				description: action.payload.description,
				dueDate: action.payload.dueDate,
			};

			state.selectedProjectId = undefined;
			state.projects.push(newProject);

			// return {
			// 	...prevState,
			// 	selectedProjectId: undefined,
			// 	projects: [...prevState.projects, newProject],
			// };
		},
		handleCancelProject: (state, action) => {
			console.log('handleCancelProject');
			state.selectedProjectId = undefined;
		},

		handleSelectProject: (state, action) => {
			console.log('handleSelectProject');
			state.selectedProjectId = action.payload;
		},

		handleDeleteProject: (state, action) => {
			console.log('handleDeleteProject');

			state.projects = state.projects.filter(
				(project: IProject) => project.id !== state.selectedProjectId
			);
			state.selectedProjectId = undefined;

			Swal.fire({
				title: 'Success!',
				text: 'Your project was deleted!',
				icon: 'success',
				confirmButtonText: 'Okay!',
			});
		},
	},
});

export const { actions, reducer } = projectsSlice;
