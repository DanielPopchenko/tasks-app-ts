import Tasks from './tasks/Tasks';
import { useActions } from '../hooks/useActions';
import { IProject } from '../store/projects/projectsSlice';

// ! props - selected prj
const ProjectDetails = (props: IProject) => {
	console.log('props: ', props);
	const { handleDeleteProject } = useActions();

	const formattedDate = new Date(props.dueDate).toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	// console.log('formattedDate: ', formattedDate);
	return (
		<div className='w-[35rem] mt-16'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between'>
					<h1 className='text-3xl font-bold text-stone-600 mb-2'>
						{props.title}
					</h1>
					<button
						className='text-stone-600 hover:text-stone-950'
						onClick={handleDeleteProject}
					>
						Delete the project
					</button>
				</div>
				<p className='mb-4 text-stone-400'>{formattedDate}</p>
				<p className='mb-4 text-stone-600 whitespace-pre-wrap'>
					{props.description}
				</p>
			</header>

			<Tasks />
		</div>
	);
};

export default ProjectDetails;
