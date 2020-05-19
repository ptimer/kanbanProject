import { ADD_TASK_BLOCK } from "../actionTypes";

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_BLOCK: {
      const { id, title } = action.payload;
      return [
        ...state,
        {
          id: id,
          title: title
        }
      ];
    }

    default:
      return state;
  }
}
