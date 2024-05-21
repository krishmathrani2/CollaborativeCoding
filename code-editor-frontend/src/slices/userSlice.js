import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export const login = (username, password) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/login/', { username, password });
        const { token } = response.data;
        const user = jwtDecode(token);
        dispatch(setUser({ user, token }));
    } catch (error) {
        console.error('Failed to login:', error);
    }
};

export default userSlice.reducer;
