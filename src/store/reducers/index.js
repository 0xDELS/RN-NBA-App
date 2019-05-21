import { combineReducers } from 'redux';
import User from './userReducer';
import News from './newsReducer';

const rootReducer = combineReducers({
    User,
    News
});

export default rootReducer;