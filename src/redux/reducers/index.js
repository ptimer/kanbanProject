import { combineReducers } from "redux";
import tasksBlocks from "./tasksBlocks";
import tasks from "./tasks";

export default combineReducers({ tasksBlocks, tasks });
