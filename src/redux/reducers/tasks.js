import { ADD_TASK, EDIT_TASK, SET_PARENT_CURRENT_ID, SET_EDIT_TASK_ID } from "../actionTypes";

const initialState = {
  ids: [],
  tasks: {},
  parentCurrentId: 0,
  whatTaskToEditId: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
      case ADD_TASK: {
        const { id, title, parentTaskBlockId } = action.payload;
        return {
          ...state,
          ids: [...state.ids, id],
          tasks: {
            ...state.tasks,
            [id]: {
             title: title,
             parentTaskBlock: parentTaskBlockId
            }
          }
        };
      }

      case EDIT_TASK: {
        const { id, title, parentTaskBlockId } = action.payload;
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [id]: {
             ...state.tasks[id],
             title: title
            }
          }
        };
      }

      case SET_PARENT_CURRENT_ID: {
        const {id} = action.payload;
        return {
          ...state,
          parentCurrentId: id
        }
      }

      case SET_EDIT_TASK_ID: {
        const {id} = action.payload;
        return {
          ...state,
          whatTaskToEditId: id
        }
      }

    default:
      return state;
  }
}
