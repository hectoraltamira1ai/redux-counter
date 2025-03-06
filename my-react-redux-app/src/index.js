// Importing React to use JSX and create components
import React from 'react';
// Importing ReactDOM to render the React component tree
import ReactDOM from 'react-dom';
// Importing Provider from react-redux to connect the Redux store with the React app
import { Provider } from 'react-redux';
// Importing the Redux store
import store from './redux/store';
// Importing the main App component
import App from './App';

// Rendering the App component wrapped with the Provider to make the Redux store available to the entire app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Mounting the app to the DOM element with id 'root'
);