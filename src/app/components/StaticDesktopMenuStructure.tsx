import React from "react";
import LocaleSwitcher from "./LocalSwitcher";

function StaticMenuDesktopStructure({ children }: { children: React.ReactNode }) {
  return (
    <div className="header-menu">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <LocaleSwitcher />
          </div>
          <nav className="col-9 header-menu__list-wrapper">
            <ul className="header-menu__list">{children}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default StaticMenuDesktopStructure;
