import React, { useState } from 'react';
import {connect} from 'react-redux';
import {editTask} from '../redux/actions'

function EditTask({editTask, modificatedTask, whatTaskToEditId}) {

  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("");
  

  const handleChanges = e => {
    
    setTitle(e.target.value);

    if(e.target.name === "click-button" || e.key === 'Enter'){  
       editTask({
          id: whatTaskToEditId,
          title: title
       })
       setChecked(false);
    }
  }



  return (
      <div>
        <input checked={checked} onChange={ () => { setChecked(!checked) }} className="modal-state" id="modal-edit-task"  type="checkbox"/>
        <div className="modal">
          <label className="modal-bg" htmlFor="modal-edit-task"></label>
          <div className="modal-body">
            <label className="btn-close" htmlFor="modal-edit-task">X</label>
            <h4 className="modal-title">Что-то не так ? !</h4>

            <div className="row modal__inner">
              <div className="col col-12">
                <div className="form-group">
                  <label htmlFor="paperInputs3">Название</label>
                  <input className="input-block" type="text" id="paperInputs3" name="input-changes" value={title}
                   onChange={ handleChanges } onKeyPress={handleChanges}/>
                  <button className="btn-large margin-top" name="click-button" onClick={ handleChanges }>Сохранить !</button>
                </div>
              </div>
            </div>

          </div>
        </div>
       </div>

  );
}

const mapDispatchToProps = { editTask }

const mapStateToProps = (state) => {
  return {
    modificatedTask: state.tasks.tasks[state.tasks.whatTaskToEditId],
    whatTaskToEditId: state.tasks.whatTaskToEditId
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask);
