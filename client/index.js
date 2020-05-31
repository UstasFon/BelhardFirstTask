import React from 'react';
import ReactDOM from 'react-dom';
import MainePage from './component/mainePage/mainePage.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from './reducers/rootReduser';
import ServerData from './component/serverData/serverData';
import 'antd/dist/antd.css';

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