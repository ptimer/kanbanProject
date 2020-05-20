import React from 'react';
import {connect} from 'react-redux';
import {setEditTaskId} from '../redux/actions'

function Task({title, setEditTaskId, id}) {
  return (
      <label  htmlFor="modal-edit-task">
        <div className="tasks-block__item paper-btn border border-primary padding-small background-secondary margin-none"
                 popover-left="Кликните по таску, чтобы отредактировать" 
                 onClick={() => setEditTaskId(id)}>
              <h5>{title}</h5>
              <p className="text-left">До 25.05.2020<span className="margin-left background-secondary">3/12</span></p>
              <div className="progress margin-top">
                <div className="bar success w-65">65%</div>
              </div>
        </div>
      </label>
  );
}

const mapDispatchToProps = { setEditTaskId }

export default connect(
  null,
  mapDispatchToProps
)(Task);
