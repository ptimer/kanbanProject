import { ADD_TASK_BLOCK, 
         ADD_TASK, 
         SET_PARENT_CURRENT_ID,
         EDIT_TASK,
         SET_EDIT_TASK_ID } from "./actionTypes";

let nextBlockId = 0;
let nextTaskId = 0;

export const addTaskBlock = content => ({
  type: ADD_TASK_BLOCK,
  payload: {
    id: ++nextBlockId,
    title: content.title
  }
})

export const addTask = content => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTaskId,
    title: content.title,
    parentTaskBlockId: content.parentTaskBlockId
  }
});

export const editTask = content => ({
  type: EDIT_TASK,
  payload: {
    id: content.id,
    title: content.title,
  }
});

export const setParentCurrentId = content => ({
  type: SET_PARENT_CURRENT_ID,
  payload: {
    id: content
  }
});

export const setEditTaskId = content => ({
  type: SET_EDIT_TASK_ID,
  payload: {
    id: content
  }
});