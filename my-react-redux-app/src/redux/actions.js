// Defining action types as constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creator for increment action
export const increment = () => {
    return {
        type: INCREMENT
    };
};

// Action creator for decrement action
export const decrement = () => {
    return {
        type: DECREMENT
    };
};