import { combineReducers } from "redux";
import tasksBlocks from "./tasksBlocks";
import tasks from "./tasks";
import dndStore from "./dndStore";

export default combineReducers({ tasksBlocks, tasks, dndStore });
