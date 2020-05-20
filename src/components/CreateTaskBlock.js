import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addTaskBlock} from '../redux/actions'

function CreateTaskBlock({addTaskBlock}) {

  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChanges = e => {
    if(e.target.name === "click-button"){
       addTaskBlock({title: title})
       setChecked(false);
    }

    if(e.target.name === "input-changes"){
       setTitle(e.target.value);
    }


    if(e.target.name === "input-changes"){
      if(e.key === 'Enter'){
        addTaskBlock({title: title})
        setChecked(false);
      }
    }
  }



  return (
      <div>
        <input checked={checked} onChange={ () => { setChecked(!checked) }} className="modal-state" id="modal-create-new-task-block"  type="checkbox"/>
        <div className="modal">
          <label className="modal-bg" htmlFor="modal-create-new-task-block"></label>
          <div className="modal-body">
            <label className="btn-close" htmlFor="modal-create-new-task-block">X</label>
            <h4 className="modal-title">Создать новый блок для тасков</h4>

            <div className="row modal__inner">
              <div className="col col-12">
                <div className="form-group">
                  <label htmlFor="paperInputs3">Название</label>
                  <input className="input-block" type="text" id="paperInputs3" name="input-changes" value={title}
                   onChange={ handleChanges } onKeyPress={handleChanges}/>
                  <button className="btn-large margin-top" name="click-button" onClick={ handleChanges }>Готово !</button>
                </div>
              </div>
            </div>

          </div>
        </div>
       </div>

  );
}

const mapDispatchToProps = { addTaskBlock }

export default connect(
  null,
  mapDispatchToProps
)(CreateTaskBlock);
