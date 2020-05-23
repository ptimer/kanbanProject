import React from 'react';
import {connect} from 'react-redux';

import '../css/tasks-block.css';
import Task from './Task';

import {setParentCurrentId, setTargetDropBlock, setTargetDragTask, editParentTaskBlock} from '../redux/actions'
import { useDrop } from 'react-dnd'

function TasksBlock({ block, setParentCurrentId, tasksIds, tasks,
                    setTargetDropBlock,  setTargetDragTask, editParentTaskBlock}){ 


    /* Альтернативный путь 
    Object.entries(tasksBlocks).map(block => {
      console.log(block[0]);
      console.log(block[1].title)
    }); */

  const [{item}, drop] = useDrop({
    accept: 'TASK',
    collect: m => ({
      item: m.getItem()
    }),
    drop: (item ,monitor) => {

    }
  })


  const dropHandler = e => {
    setTargetDragTask(item.task_id);
    setTargetDropBlock(block.id);

    editParentTaskBlock({id: item.task_id, parentTaskBlock: block.id});
  }

   return (
       <div onDrop={dropHandler} ref={drop} className=" col-4 padding-small tasks-block__element">
             <div className="card" id={`taskBlock-${block.id}`}>
                 <div className="card-header">
                   <span>{block.title}</span>
                 </div>
                 <div className="card-body">
                 
                 {
                 

                   tasksIds.map(id => ({...tasks[id], id}))
                   .filter(task => task.parentTaskBlock === block.id)
                   .map(task => <Task key={task.id} task={task} />)
                 }

                 </div>
               <div className="card-footer">
                 <label className="paper-btn btn-block text-center" htmlFor="modal-create-new-task"
                 onClick={() => setParentCurrentId(block.id) }>Создать таск</label>
               </div>
             </div>
       </div>
   );

}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    tasksIds: state.tasks.ids
  }
}

const mapDispatchToProps = { 
  setParentCurrentId,
  setTargetDropBlock,
  setTargetDragTask,
  editParentTaskBlock
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksBlock);
