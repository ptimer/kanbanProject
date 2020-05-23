import React from 'react';
import {connect} from 'react-redux';
import {setEditTaskId} from '../redux/actions'
import { useDrag } from 'react-dnd'

function Task({task, setEditTaskId}){

    const task_id = task.id;
    const type = "TASK";
    const [collectedProps, drag] = useDrag({
      item: { task_id, type },
      collect: (monitor) => ({
        isBegin: monitor.isDragging(),
        item: monitor.getItem()
      }),
    })



    const handlerClick = () => {
      setEditTaskId(task.id)
      //drag.removeAttribute('popover-top');
    }


    return (
      <div id={`task-${task.id}`} ref={drag} popover-top="Кликните по таску, чтобы отредактировать">
        <label htmlFor="modal-edit-task">
          <div
          className="tasks-block__item paper-btn border border-primary padding-small background-secondary margin-none"
                   onClick={handlerClick}>
                <h5>{task.title}</h5>
                <p className="text-left">До 25.05.2020<span className="margin-left background-secondary">3/12</span></p>
                <div className="progress margin-top">
                  <div className="bar success w-65">65%</div>
                </div>
          </div>
        </label>
      </div>

  )
}

const mapDispatchToProps = { setEditTaskId }

export default connect(
  null,
  mapDispatchToProps
)(Task);
