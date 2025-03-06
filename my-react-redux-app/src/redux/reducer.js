// Defining the counterReducer function to handle state changes based on actions
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // Incrementing the state by 1
            return state + 1;
        case 'DECREMENT':
            // Decrementing the state by 1
            return state - 1;
        default:
            // Returning the current state if action type is not recognized
            return state;
    }
};