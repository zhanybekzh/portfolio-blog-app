import React from "react";

function HeaderDesktopMenu() {
  return (
    <div className="header-menu ">
      <div className="container">
        <div className="row">
          <nav className="col-12 header-menu__list-wrapper">
            <ul className="header-menu__list">
              <li className="header-menu__item">
                <a href="/">Главная</a>
              </li>
              <li className="header-menu__item">
                <a href="/blog/">Блог</a>
              </li>
              <li className="header-menu__item">
                <a href="/works/">Примеры работ</a>
              </li>
              <li className="header-menu__item">
                <a href="/contacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktopMenu;
