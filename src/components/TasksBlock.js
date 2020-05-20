import React from 'react';
import {connect} from 'react-redux';

import '../css/tasks-block.css';

import Task from './Task';

const TasksBlock = ({ ids, tasksBlocks }) => (
         <div className="row col-12 tasks-block ">

        
          { 
            ids.map(id => ({...tasksBlocks[id], id})).map((block) => {
              
              return (<div key={block.id} className=" col-4 padding-small tasks-block__element">
                      <div className="card">
                          <div className="card-header">
                            <span>{block.title}</span>
                          </div>
                          <div className="card-body">

                            <Task/>

                          </div>
                        <div className="card-footer">
                          <label className="paper-btn btn-block text-center" htmlFor="modal-1">Создать таск</label>
                        </div>
                      </div>
                    </div>);
            })
          }



            <div className="addBlock col-4 row flex-center flex-middle border border-primary margin-none">
                <div className="row flex-spaces child-borders">
                  <label className="paper-btn btn-large btn-secondary" htmlFor="modal-create-new-task-block" popover-bottom="Добавить новый блок">+</label>
                </div>
            </div>

            
        </div>
);

const mapStateToProps = (state) => {
  return {
    ids: state.tasksBlocks.ids,
    tasksBlocks: state.tasksBlocks.blocks
  }
}

export default connect(
  mapStateToProps,
  null
)(TasksBlock);
