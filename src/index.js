import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/app';

let initialState = localStorage.getItem('localState') ? JSON.parse(localStorage.getItem('localState')) : [];

export const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => localStorage.setItem('localState', JSON.stringify(store.getState())));