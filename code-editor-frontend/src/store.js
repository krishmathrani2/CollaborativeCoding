import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import sessionReducer from './slices/sessionSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        session: sessionReducer,
    },
});
