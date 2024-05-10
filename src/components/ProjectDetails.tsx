import React from 'react';
import Tasks from './tasks/Tasks';
import { useActions } from '../hooks/useActions';
import { IProject } from '../store/projects/projectsSlice';

// ! props - selected prj
const ProjectDetails = ({ description, dueDate, title }: IProject) => {
	console.log('dueDate: ', dueDate);
	const { handleDeleteProject } = useActions();

	const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	console.log(dueDate);
	console.log('formattedDate: ', formattedDate);
	return (
		<div className='w-[35rem] mt-16'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between'>
					<h1 className='text-3xl font-bold text-stone-600 mb-2'>{title}</h1>
					<button
						className='text-stone-600 hover:text-stone-950'
						onClick={handleDeleteProject}
					>
						Delete the project
					</button>
				</div>
				<p className='mb-4 text-stone-400'>{formattedDate}</p>
				<p className='mb-4 text-stone-600 whitespace-pre-wrap'>{description}</p>
			</header>

			<Tasks />
		</div>
	);
};

export default ProjectDetails;
