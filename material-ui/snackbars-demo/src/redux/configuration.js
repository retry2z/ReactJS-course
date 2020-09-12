import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter';
import snackbarReducer from './reducers/snackbar';

const reducer = combineReducers({
    counter: counterReducer,
    snackbar: snackbarReducer,
});

const store = createStore(
    reducer,
    {},
);

export default store