import { ADD_TASK_BLOCK } from "./actionTypes";

let nextBlockId = 0;

export const addTaskBlock = content => ({
  type: ADD_TASK_BLOCK,
  payload: {
    id: ++nextBlockId,
    title: content.title
  }
});