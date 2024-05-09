import React from 'react';
import NewTask from './newTask';

const Tasks = ({ onAddTask, onDeleteTask, tasks }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
            {tasks.length === 0 ? (
                <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
            ) : (
                <ul className="p-4 rounded-md bg-stone-100 mt-8">
                    {tasks.map((task) => (
                        <li
                            key={Math.random()}
                            className="flex items-center justify-between my-4 bg-stone-200 py-2 px-3 rounded-md"
                        >
                            <span>{task.text}</span>
                            <button
                                className="text-stone-700 hover:text-red-600"
                                onClick={() => onDeleteTask(task.taskId)}
                            >
                                Delete task
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Tasks;
