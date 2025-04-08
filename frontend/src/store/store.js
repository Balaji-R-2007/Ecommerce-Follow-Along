import { configureStore } from '@reduxjs/toolkit';

const initialUserState = {
    email: '',
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});