import React from 'react';

function Task() {
  return (
      <div className="tasks-block__item paper-btn border border-primary padding-small background-secondary margin-none"
               popover-left="Кликните по таску, чтобы отредактировать">
            <h5>Добавить верстку</h5>
            <p className="text-left">До 25.05.2020<span className="margin-left background-secondary">3/12</span></p>
            <div className="progress margin-top">
              <div className="bar success w-65">65%</div>
            </div>
      </div>
  );
}

export default Task;
