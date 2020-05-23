import React from 'react';
import {connect} from 'react-redux';

import '../css/tasks-block.css';
import TaskBlock from './TaskBlock';

import {setParentCurrentId} from '../redux/actions'
import { useDrop } from 'react-dnd'

function TasksBlock({ ids, tasksBlocks}){ 


    /* Альтернативный путь 
    Object.entries(tasksBlocks).map(block => {
      console.log(block[0]);
      console.log(block[1].title)
    }); */


    return(
         <div className="row col-12 tasks-block">
        
          { 
            ids.map(id => ({...tasksBlocks[id], id})).map((block) => {
              return <TaskBlock key={block.id} block={block} />
            })
          }



            <div className="addBlock col-4 row flex-center flex-middle border border-primary margin-none">
                <div className="row flex-spaces child-borders">
                  <label className="paper-btn btn-large btn-secondary" htmlFor="modal-create-new-task-block" popover-bottom="Добавить новый блок">+</label>
                </div>
            </div>

            
        </div>
  );

}

const mapStateToProps = (state) => {
  return {
    ids: state.tasksBlocks.ids,
    tasksBlocks: state.tasksBlocks.blocks,
  }
}

export default connect(
  mapStateToProps,
  null
)(TasksBlock);
