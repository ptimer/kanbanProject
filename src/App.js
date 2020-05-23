import React from 'react';
import './css/paper-library.css';
import './css/App.css';
import './css/tasks-block.css';

import Header from './components/Header';
import TasksBlock from './components/TasksBlock';
import CreateTaskBlock from './components/CreateTaskBlock';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';

import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">

      <Header/>

      <DndProvider backend={Backend}>
        <div className="row dashboard container">
            <h3 className="dashboard__title col-12 "> <span className="badge">Разработка Kanban проекта</span></h3>

            <TasksBlock />
        </div>
      </DndProvider>

      { 
        // modals windows 
      }
      <CreateTaskBlock />
      <CreateTask />
      <EditTask />


    </div>
  );
}

export default App;
