import React from 'react';
import Button from './UI/Button';
import { IProject } from '../store/projects/projectsSlice';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Sidebar = () => {
	const { projects, selectedProjectId } = useTypedSelector(
		state => state.projects
	);

	const { handleStartingProject, handleSelectProject } = useActions();
	return (
		<aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-[100%]'>
			<h2 className='mb-8 uppercase font-bold text-stone-200'>Your projects</h2>
			<div>
				<Button onClick={handleStartingProject}>+ Add project</Button>
			</div>

			<ul className='mt-8'>
				{projects.map((project: IProject) => {
					let classes =
						'w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800';
					if (project.id === selectedProjectId) {
						classes += ' bg-stone-800 text-stone-200';
					} else {
						classes += ' text-stone-400';
					}

					return (
						<li key={project.id}>
							<button
								className={classes}
								onClick={() => handleSelectProject(project.id)}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
