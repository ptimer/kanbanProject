import React from 'react';
import '../css/tasks-block.css';

import Task from './Task';

function TasksBlock() {
  return (
          <div className="row col-12 tasks-block ">

            <div className=" col-4 padding-small tasks-block__element">
              <div className="card">
                  <div className="card-header">
                    <span>Нужно сделать</span>
                  </div>
                  <div className="card-body">

                    <Task/>

                  </div>


                <div className="card-footer">
                  <label className="paper-btn btn-block text-center" for="modal-1">Создать таск</label>
                </div>
              </div>
            </div>



            <div className="addBlock col-4 row flex-center flex-middle border border-primary margin-none">
                <div className="row flex-spaces child-borders">
                  <label className="paper-btn btn-large btn-secondary" for="modal-create-new-task-block" popover-bottom="Добавить новый блок">+</label>
                </div>
            </div>

            
        </div>
  );
}

export default TasksBlock;
