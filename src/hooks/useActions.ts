import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { actions as projectsActions } from '../store/projects/projectsSlice';
import { actions as tasksActions } from '../store/tasks/tasksSlice';

const rootActions = {
	...projectsActions,
	...tasksActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), []);
};
