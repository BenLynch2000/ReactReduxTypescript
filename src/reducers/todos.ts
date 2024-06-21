import { ActionTypes } from '../actions/types';
import { ToDo, FetchToDosAction } from '../actions';

export const todosReducer = (state : ToDo[] = [], action : FetchToDosAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}
