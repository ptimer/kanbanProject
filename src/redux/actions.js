import { ADD_TASK_BLOCK, 
         ADD_TASK, 
         SET_PARENT_CURRENT_ID,
         EDIT_TASK,
         SET_EDIT_TASK_ID,

         SET_TARGET_DROP,
         SET_TARGET_DRAG,
         EDIT_PARENT_TASK_BLOCK } from "./actionTypes";

let nextBlockId = 2;
let nextTaskId = 2;

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

export const setTargetDropBlock = content => ({
  type: SET_TARGET_DROP,
  payload: {
    id: content
  }
})

export const setTargetDragTask = content => ({
  type: SET_TARGET_DRAG,
  payload: {
    id: content
  }
})

export const editParentTaskBlock = content => ({
  type: EDIT_PARENT_TASK_BLOCK,
  payload: {
    id: content.id,
    parentTaskBlock: content.parentTaskBlock
  }
})