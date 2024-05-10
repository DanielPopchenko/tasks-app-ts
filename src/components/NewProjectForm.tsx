import React, { useRef } from 'react';
import Input from './UI/Input.tsx';
import Modal, { IOpenModalHandle } from './UI/Modal.tsx';
import Button from './UI/Button';
import { useActions } from '../hooks/useActions.ts';

const inputClasses =
	'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

// !props
const NewProjectForm = () => {
	const { handleAddProject, handleCancelProject } = useActions();

	const modal = useRef<IOpenModalHandle>(null);
	const title = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);
	const dueDate = useRef<HTMLInputElement>(null);

	const handleSave = () => {
		const enteredTitle = title.current!.value;
		const enteredDescription = description.current!.value;
		const enteredDueDate = dueDate.current!.value;
		console.log(typeof enteredDueDate);

		if (
			enteredTitle.trim() === '' ||
			enteredDescription.trim() === '' ||
			enteredDueDate.trim() === ''
		) {
			// ! because we customised ref with useImperativeHandle (added open method)
			modal.current!.open();
			// ! to code being not executed
			return;
		}

		handleAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	};

	return (
		<>
			<Modal ref={modal}>
				<h2 className='text-xl font-bold text-stone-700 my-4'>
					Invalid Input !
				</h2>
				<p className='text-stone-500 mb-4'>
					Ooops... Looks like you forgot to enter the value.
				</p>
				<p className='text-stone-500 mb-4'>
					Please make sure you provided valid value for every input field.
				</p>
			</Modal>
			<div className='w-[35rem] mt-16'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<li>
						<Button light onClick={handleCancelProject}>
							Cancel
						</Button>
					</li>
					<li>
						<button
							className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900'
							onClick={handleSave}
						>
							Save
						</button>
					</li>
				</menu>

				<div>
					<Input label='Title' type='text' ref={title} />
					<textarea className={inputClasses} ref={description} />
					<Input label='Due to' type='date' ref={dueDate} />
				</div>
			</div>
		</>
	);
};

export default NewProjectForm;
