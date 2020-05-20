import { ADD_TASK_BLOCK } from "../actionTypes";

const initialState = {
  ids: [],
  blocks: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_BLOCK: {
      const { id, title } = action.payload;
      return {
        ...state,
        ids: [...state.ids, id],
        blocks: {
          ...state.blocks,
          [id]: {
           title: title
          }
        }
      };
    }

    default:
      return state;
  }
}
