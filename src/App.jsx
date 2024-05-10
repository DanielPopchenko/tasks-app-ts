import { useState } from 'react';
import NewProjectForm from './components/NewProjectForm';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import ProjectDetails from './components/ProjectDetails';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
	const tasksState = useTypedSelector(state => state.tasks);
	const projectsState = useTypedSelector(state => state.projects);

	// const [projectsState, setProjectsState] = useState({
	// 	// undefined means that we are doing nothing
	// 	selectedProjectId: undefined,
	// 	projects: [],
	// 	tasks: [],
	// });

	// const handleAddTask = (text) => {
	//     console.log('handleAddTask: ', handleAddTask);
	//     setProjectsState((prevState) => {
	//         const newTask = {
	//             taskId: Math.random(),
	//             projectId: prevState.selectedProjectId,
	//             text: text,
	//         };
	//         return {
	//             ...prevState,
	//             tasks: [newTask, ...prevState.tasks],
	//         };
	//     });
	// };

	// const handleDeleteTask = (id) => {
	//     console.log('id: ', id);
	//     console.log('handleDeleteTask: ', handleDeleteTask);
	//     setProjectsState((prevState) => {
	//         return {
	//             ...prevState,
	//             // если здесь возвращается true, то оставляем елемент
	//             tasks: prevState.tasks.filter((task) => task.taskId !== id),
	//         };
	//     });
	// };

	// const handleStartingProject = () => {
	//     console.log('handleStartingProject: ', handleStartingProject);
	//     setProjectsState((prevState) => {
	//         return {
	//             ...prevState,
	//             // null here means that we are now adding a project
	//             selectedProjectId: null,
	//         };
	//     });
	// };

	// const handleAddProject = (projectData) => {
	//     console.log('handleAddProject: ', handleAddProject);
	//     setProjectsState((prevState) => {
	//         const newProject = {
	//             ...projectData,
	//             id: Math.random(),
	//         };
	//         return {
	//             ...prevState,
	//             selectedProjectId: undefined,
	//             projects: [...prevState.projects, newProject],
	//         };
	//     });
	// };

	// const handleCancelProject = () => {
	//     console.log('handleCancelProject: ', handleCancelProject);
	//     setProjectsState((prevState) => {
	//         return {
	//             ...prevState,
	//             // null here means that we are now adding a project
	//             selectedProjectId: undefined,
	//         };
	//     });
	// };

	// const handleSelectProject = (id) => {
	//     console.log('handleSelectProject: ', handleSelectProject);
	//     setProjectsState((prevState) => {
	//         return {
	//             ...prevState,
	//             selectedProjectId: id,
	//         };
	//     });
	// };

	// const handleDeleteProject = () => {
	//     console.log('handleDeleteProject: ', handleDeleteProject);
	//     setProjectsState((prevState) => {
	//         return {
	//             ...prevState,
	//             selectedProjectId: undefined,
	//             // если здесь возвращается true, то оставляем елемент
	//             projects: prevState.projects.filter(
	//                 (project) => project.id !== prevState.selectedProjectId,
	//             ),
	//         };
	//     });
	// };

	let selectedProject = projectsState.projects.find(
		project => project.id === projectsState.selectedProjectId
	);

	let content = <ProjectDetails project={selectedProject} />;

	if (projectsState.selectedProjectId === null) {
		content = <NewProjectForm />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected />;
	} else {
	}

	return (
		<main className='h-screen flex gap-8'>
			<Sidebar />
			{content}
			{/* <NoProjectSelected onAddingProject={handleStartingProject} /> */}
		</main>
	);
}

export default App;
