import { FetchToDosAction, DeleteToDoAction } from './ToDos';

export enum ActionTypes {
  FETCH_TODOS,
  DELETE_TODO
} 

export type Action = FetchToDosAction | DeleteToDoAction;
