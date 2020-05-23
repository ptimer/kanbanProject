import { SET_TARGET_DROP, 
          SET_TARGET_DRAG } from "../actionTypes";

const initialState = {
  dropBlock: "",
  dragTask: ""
}

export default function(state = initialState, action) {
  switch (action.type) {
      case SET_TARGET_DROP: {
        return {...state, dropBlock: action.payload.id};
      }

      case SET_TARGET_DRAG: {
        return {...state, dragTask :state.dragTask = action.payload.id};
      } 


      default:
        return state;
  }
}
