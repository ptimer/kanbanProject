import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions'

function CreateTask({addTask, parentTaskBlockId}) {

  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChanges = e => {
    if(e.target.name === "click-button"){
       addTask({title: title, parentTaskBlockId: parentTaskBlockId})
       setChecked(false);
    }

    if(e.target.name === "input-changes"){
       setTitle(e.target.value);
    }


    if(e.target.name === "input-changes"){
      if(e.key === 'Enter'){
        addTask({title: title, parentTaskBlockId: parentTaskBlockId})
        setChecked(false);
      }
    }
  }



  return (
      <div>
        <input checked={checked} onChange={ () => { setChecked(!checked) }} className="modal-state" id="modal-create-new-task"  type="checkbox"/>
        <div className="modal">
          <label className="modal-bg" htmlFor="modal-create-new-task"></label>
          <div className="modal-body">
            <label className="btn-close" htmlFor="modal-create-new-task">X</label>
            <h4 className="modal-title">Создать новое задание</h4>

            <div className="row modal__inner">
              <div className="col col-12">
                <div className="form-group">
                  <label htmlFor="paperInputs3">Дай название !</label>
                  <input className="input-block" type="text" id="paperInputs3" name="input-changes" value={title}
                   onChange={ handleChanges } onKeyPress={handleChanges}/>
                  <button className="btn-large margin-top" name="click-button" onClick={ handleChanges }>Поехали !</button>
                </div>
              </div>
            </div>

          </div>
        </div>
       </div>

  );
}


const mapStateToProps = (state) => {
  return {
    parentTaskBlockId: state.tasks.parentCurrentId
  }
}

const mapDispatchToProps = { addTask }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask);
