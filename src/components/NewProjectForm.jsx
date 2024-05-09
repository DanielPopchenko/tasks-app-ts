import React, { useRef } from 'react';
import Input from './UI/Input';
import Modal from './UI/Modal';
import Button from './UI/Button';

const NewProjectForm = ({ onAdd, onCancel }) => {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            // ! because we customised ref with useImperativeHandle (added open method)
            modal.current.open();
            // ! to code being not executed
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    };

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input !</h2>
                <p className="text-stone-500 mb-4">
                    Ooops... Looks like you forgot to enter the value.
                </p>
                <p className="text-stone-500 mb-4">
                    Please make sure you provided valid value for every input field.
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <Button light onClick={onCancel}>
                            Cancel
                        </Button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    <Input label="Title" isTextarea={false} type="text" ref={title} />
                    <Input label="Description" isTextarea ref={description} />
                    <Input label="Due to" isTextarea={false} type="date" ref={dueDate} />
                </div>
            </div>
        </>
    );
};

export default NewProjectForm;
