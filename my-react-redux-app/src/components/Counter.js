import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Main Counter Component</h1>
            <p>Count: {count}</p>
            <button className="increment" onClick={() => dispatch(increment())}>Increment</button>
            <button className="decrement" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;