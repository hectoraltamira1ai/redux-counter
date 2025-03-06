import React from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Counter />
            <Counter2 />
        </div>
    );
};

export default App;