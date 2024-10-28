import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocalSwitcher";


function HeaderDesktopMenu() {

  const t = useTranslations("HeaderMenu");
  return (
    <div className="header-menu ">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <LocaleSwitcher />
          </div>
          <nav className="col-9 header-menu__list-wrapper">
            <ul className="header-menu__list">
              <li className="header-menu__item">
                <Link href="/" title={t("main")}>{t("main")}</Link>
              </li>
              <li className="header-menu__item">
                <Link href="/blog/" title={t("blog")}>{t("blog")}</Link>
              </li>
              <li className="header-menu__item">
                <Link href="/works/" title={t("works")}>{t("works")}</Link>
              </li>
              <li className="header-menu__item">
                <Link href="/contacts" title={t("contacts")}>{t("contacts")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktopMenu;
