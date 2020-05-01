import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


//Store Creation:
//1. RootReducer
//2. Redux DevTool Enhancer

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);