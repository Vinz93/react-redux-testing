import { SAVE_COMMENT } from '../actions/types';

const comments = function (state = [], action) {
    switch(action.type) {
      case SAVE_COMMENT:
        return [...state, action.comment];
      default:
        return state;
    }
};
export default comments;
