
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import thunk from 'redux-thunk';
import thunk from "redux-thunk";
import collegeReducer from './reducers/collegeReducers';

const rootReducer = combineReducers({
    colleges: collegeReducer           
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;