import { ADD_TASK_BLOCK } from "./actionTypes";

let nextTodoId = 0;

export const addTaskBlock = content => ({
  type: ADD_TASK_BLOCK,
  payload: {
    id: ++nextTodoId,
    title: content
  }
});