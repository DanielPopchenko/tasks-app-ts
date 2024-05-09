import React from 'react';
import img from '../assets/no-project.png';
import Button from './UI/Button';

const NoProjectSelected = ({ onAddingProject }) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={img} alt="Empty task list" className="w-16 h-16 object-contain mx-auto" />

            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or start with a new one</p>
            <p className="mt-8">
                <Button onClick={onAddingProject}>Create a new project</Button>
            </p>
        </div>
    );
};

export default NoProjectSelected;
