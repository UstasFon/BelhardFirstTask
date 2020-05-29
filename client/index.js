import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainePage from './component/mainePage/mainePage.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from './reducers/rootReduser';

const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <MainePage/>
    </Provider>
    ,
    document.getElementById('root')
);