import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
//Store Creation:
//1. RootReducer
//2. Redux DevTool Enhancer
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
export default createStore(rootReducer, enhancer);



// export default createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );