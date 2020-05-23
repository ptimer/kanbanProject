import React from 'react';

function Header() {
  return (
      <header className="col-12 website__header">
           <nav className="border split-nav">
              <div className="nav-brand">
                <h3><a href="#">TheEndIsCloser 😈</a></h3>
              </div>
              <div className="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1"/>
                <button>
                  <label htmlFor="collapsible1">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </label>
                </button>
                <div className="collapsible-body">
                  <ul className="inline">
                    <li><a href="#">Список проектов</a></li>
                    <li><a href="#">Настройки</a></li>
                    <li><a href="#">Аккаунт</a></li>
                  </ul>
                </div>
              </div>
          </nav>
      </header>
  );
}

export default Header;
