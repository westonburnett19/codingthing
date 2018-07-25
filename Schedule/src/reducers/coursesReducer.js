import { FETCH_COURSES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:

        default:
        return state;
    }
}