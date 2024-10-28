import { useState, useEffect } from "react";
import classNames from "classnames";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocalSwitcher";

import React from "react";

const HeaderMobileMenu = () => {
  const t = useTranslations("HeaderMenu");

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
        <div className="row align-items-center">
        <div className="col-3">
            <LocaleSwitcher />
          </div>
          <div className="col-9 header-mobile-menu__content">
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
                <Link href="/" title={t("main")}>{t("main")}</Link>
              </li>
              <li className="header-mobile-menu__item">
                <Link href="/blog/" title={t("blog")}>{t("blog")}</Link>
              </li>
              <li className="header-mobile-menu__item">
                <Link href="/works/" title={t("works")}>{t("works")}</Link>
              </li>
              <li className="header-mobile-menu__item">
                <Link href="/contacts" title={t("contacts")}>{t("contacts")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
