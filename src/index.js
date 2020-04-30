import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

