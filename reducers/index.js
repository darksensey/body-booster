import {
    SET_MODE
} from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case SET_MODE: {
            console.log('change');
            return Object.assign({}, state, {
                mode: action.mode
            });
        }
        default:
            return state
    }
};