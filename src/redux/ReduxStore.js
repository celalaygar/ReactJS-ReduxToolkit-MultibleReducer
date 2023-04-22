import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './authentication/AuthenticationSlice';
import counterReducer from './counterSection/counterSlice';

export const store = configureStore({
    reducer: { counter: counterReducer, authentication: authenticationReducer },
})
