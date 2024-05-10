import { configureStore } from '@reduxjs/toolkit';
import { reducer as projectsReducer } from './projects/projectsSlice';
import { reducer as tasksReducer } from './tasks/tasksSlice';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		projects: projectsReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
