import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/app';

let initialState = [
    {
        id: 1,
        postAuthorName: '1',
        authorAvatar: './favicon.ico',
        postDate: `6456466`,
        postText: 'text',
        postTime: `465464`,
        likeCount: 0,
        isLiked: false,
    },
    {
        id: 2,
        postAuthorName: '2',
        authorAvatar: './favicon.ico',
        postDate: `6456466`,
        postText: 'text',
        postTime: `465464`,
        likeCount: 0,
        isLiked: false,
    },
    {
        id: 3,
        postAuthorName: '3',
        authorAvatar: './favicon.ico',
        postDate: `6456466`,
        postText: 'text',
        postTime: `465464`,
        likeCount: 0,
        isLiked: false,
    }
];

// if (localStorage.getItem('localState')) {
//     initialState = JSON.parse(localStorage.getItem('localState'));
// }

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);