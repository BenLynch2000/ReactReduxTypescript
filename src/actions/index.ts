import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const URL = "https://jsonplaceholder.typicode.com";

export interface ToDo {
  userId: number; 
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchToDosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: ToDo[];
}

export const fetchTodos = () => async (dispatch : Dispatch) => {
  const response = await axios.get<ToDo[]>(`${URL}/todos`);

  dispatch<FetchToDosAction>({
    type: ActionTypes.FETCH_TODOS,
    payload: response.data,
  });
}
