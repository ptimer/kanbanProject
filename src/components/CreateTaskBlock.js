import React from 'react';

function CreateTaskBlock() {
  return (
      <div>
        <input class="modal-state" id="modal-create-new-task-block" type="checkbox"/>
        <div class="modal">
          <label class="modal-bg" for="modal-create-new-task-block"></label>
          <div class="modal-body">
            <label class="btn-close" for="modal-create-new-task-block">X</label>
            <h4 class="modal-title">Создать новый блок для тасков</h4>

            <div class="row modal__inner">
              <div class="col col-12">
                <div class="form-group">
                  <label for="paperInputs3">Название</label>
                  <input class="input-block" type="text" id="paperInputs3"/>
                  <button class="btn-large margin-top">Готово !</button>
                </div>
              </div>
            </div>

          </div>
        </div>
       </div>

  );
}

export default CreateTaskBlock;
