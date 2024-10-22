import { useState, useEffect } from "react";
import classNames from "classnames";

import React from "react";

const HeaderMobileMenu = () => {
  const [isMobileMenuOpened, setMobileMenuStatus] = useState(false);
  const toggleMobileMenu = (state: boolean = !isMobileMenuOpened) => {
    setMobileMenuStatus(state);
  };

  useEffect(() => {
    const handleBodyClick = (e: any) => {
      const mobileMenu: any = document.querySelector(".header-mobile-menu");
      const menuButton: any = document.querySelector("#menuButton");
      if (!mobileMenu.contains(e.target) && e.target !== menuButton) {
        toggleMobileMenu(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isMobileMenuOpened]);

  return (
    <div
      className={`${classNames("header-mobile-menu", {
        _active: isMobileMenuOpened,
      })}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 header-mobile-menu__content">
            <div
              id="menuButton"
              onClick={() => {
                toggleMobileMenu();
              }}
              className="header-mobile-menu-icon__wrapper"
            >
              <div className="header-mobile-menu-icon">
                <span />
              </div>
            </div>
          </div>
          <nav className="col-12 header-mobile-menu__list-wrapper">
            <ul className="header-mobile-menu__list">
              <li className="header-mobile-menu__item">
                <a href="/">Главная</a>
              </li>
              <li className="header-mobile-menu__item">
                <a href="/blog/">Блог</a>
              </li>
              <li className="header-mobile-menu__item">
                <a href="/works/">Примеры работ</a>
              </li>
              <li className="header-mobile-menu__item">
                <a href="/contacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
