import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
    coin: 0,
    type: ""
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValues,
    reducers: {
        increment: (state) => {
            state.coin += 1;
            state.type = "increment";
        },
        decrement: (state) => {
            state.coin -= 1;
            state.type = "decrement";
        },
        incrementByAmount: (state, action) => {
            state.coin += action.payload.coin;
            state.type = action.payload.type;
        },
        decrementByAmount: (state, action) => {
            state.coin -= action.payload.coin;
            state.type = action.payload.type;
        }
    },
})


export const incrementAsync = payload => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(payload));
    }, 2000);
};


export const decrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(decrementByAmount(amount));
    }, 2000);
};

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export const selectedCount = state => state.counter;

export default counterSlice.reducer