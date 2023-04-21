import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSection/counterSlice';

export const store = configureStore({
    reducer: { counter: counterReducer, },
})
