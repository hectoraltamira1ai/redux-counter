import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter2 = () => {
    const count2 = useSelector(state => state);
    const dispatch = useDispatch();
    const [showExplanation, setShowExplanation] = useState(false);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    return (
        <div className="container">
            <h1>Secondary Counter Component</h1>
            <p>Count: {count2}</p>
            <button className="increment" onClick={() => dispatch(increment())}>Increment</button>
            <button className="decrement" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="explanation" onClick={toggleExplanation}>Code Explanation</button>
            {showExplanation && (
                <div className="explanation-text">
                    <h2>Step-by-Step Explanation</h2>
                    <p>This React Redux Counter App works as follows:</p>
                    <ol>
                        <li>**Project Structure**: The project is structured with components, redux, and other necessary files.</li>
                        <li>**Redux Store**: The store is set up with actions, reducers, and the store configuration.</li>
                        <li>**Connecting Redux to React**: The `Provider` component makes the Redux store available to the entire app.</li>
                        <li>**Main App Component**: The `App` component renders the `Counter` and `Counter2` components.</li>
                        <li>**Counter Components**: These components use `useSelector` to access the state and `useDispatch` to dispatch actions.</li>
                        <li>**State Updates**: The state is updated through actions and reducers, and the UI reflects these changes.</li>
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Counter2;