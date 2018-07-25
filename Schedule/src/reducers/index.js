import { FETCH_COURSES} from '../actions/types';
import courses from './coursesReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;