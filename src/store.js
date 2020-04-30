import { createStore } from 'redux';
import rootReducer from './reducers';

//Store Creation:
//1. RootReducer
//2. Redux DevTool Enhancer

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);