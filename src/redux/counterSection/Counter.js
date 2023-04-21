
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { decrement, decrementAsync, decrementByAmount, increment, incrementAsync, incrementByAmount, selectCount } from './counterSlice';

const Counter = () => {
    const count = useSelector(selectCount);

    const dispatch = useDispatch();
    return (
        <div>
            <hr />
            <b>Counter Section</b>
            <br />
            <button onClick={() => { dispatch(increment()); }} >
                Increase
            </button>

            <button onClick={() => { dispatch(decrement()); }} >
                Decrease
            </button>

            <button onClick={() => {
                dispatch(incrementByAmount({
                    type: "incrementByAmount",
                    coin: 10
                }));
            }} >
                IncrementBy 10
            </button>

            <button onClick={() => {
                dispatch(decrementByAmount({
                    type: "decrementByAmount",
                    coin: 10
                }));
            }} >
                DecrementBy 10
            </button>
            <button onClick={() => dispatch(incrementAsync({
                type: "incrementAsync",
                coin: 3
            }))} >
                Add Async
            </button>

            <button onClick={() => dispatch(decrementAsync({
                type: "decrementAsync",
                coin: 12
            }))} >
                Decrement Async
            </button>
            <br />
            <span>type : {count.type} </span>
            <br />
            <span>coin : {count.coin} </span>
            <hr />
        </div>
    );
};

export default Counter;