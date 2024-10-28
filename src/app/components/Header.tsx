"use client";

import React, { useState, useEffect } from "react";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import classNames from "classnames";

const Header: React.FC = () => {
  const [isWindowScrolled, setWindowScrolledStatus] = useState(false);
  const updateShadow = () => {
    if (window.scrollY > 0) {
      setWindowScrolledStatus(true);
    } else {
      setWindowScrolledStatus(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", updateShadow);
    return () => {
      window.removeEventListener("scroll", updateShadow);
    };
  }, []);

  return (
    <header className={`${classNames({ shadow: isWindowScrolled })}`}>
      <HeaderDesktopMenu />
      <HeaderMobileMenu />
    </header>
  );
};

export default Header;
