import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    users: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'users':
            return{
                ...state,
                users: action.payload
            };
        case 'delete':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };

        default:
                return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
