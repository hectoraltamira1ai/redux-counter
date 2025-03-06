// Importing configureStore from @reduxjs/toolkit to create the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Importing the counterReducer to manage the state
import { counterReducer } from './reducer';

// Creating the Redux store with the counterReducer
const store = configureStore({
  reducer: counterReducer
});

// Exporting the store as the default export
export default store;