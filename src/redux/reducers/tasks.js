import { ADD_TASK, SET_PARENT_CURRENT_ID } from "../actionTypes";

const initialState = {
  ids: [],
  tasks: {},
  parentCurrentId: 0
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

      case SET_PARENT_CURRENT_ID: {
        const {id} = action.payload;
        return {
          ...state,
          parentCurrentId: id
        }
      }

    default:
      return state;
  }
}
