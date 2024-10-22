import React from "react";
import * as Icon from 'react-feather';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__inner col-12">
            <div className="footer__links links">
              <div className="links__item">
                <a href="" title="Пройти на мою instagram-страничку">
                  <Icon.Instagram className="icon icon-40" color={"rgba(255, 100, 100, 1)"}/>
                </a>
              </div>
              <div className="links__item">
                <a href="" title="Посмотреть мой GitHub">
                  <Icon.GitHub className="icon icon-40" color={"rgba(33, 36, 61, 1)"}/>
                </a>
              </div>
              <div className="links__item">
                <a
                  href="https://wa.me/77764222201"
                  style={{ color: "#4CEA65" }}
                  title="Написать мне на WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-40"
                  >
                    <path d="M21 11.5a8.37 8.37 0 0 1-.9 3.8 8.49 8.49 0 0 1-7.6 4.7 8.37 8.37 0 0 1-3.8-.9L3 21l1.9-5.7a8.37 8.37 0 0 1-.9-3.8 8.49 8.49 0 0 1 4.7-7.6 8.37 8.37 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z" />
                    <path d="M9.49 10a7.58 7.58 0 0 0 .72 1.42A8 8 0 0 0 14 14.5M9.49 10a7.47 7.47 0 0 1-.4-1.4.51.51 0 0 1 .52-.6h0a.54.54 0 0 1 .51.37l.38 1.13ZM14 14.5a7.8 7.8 0 0 0 1.43.41.51.51 0 0 0 .6-.52h0a.54.54 0 0 0-.37-.51l-1.16-.38Z" />
                  </svg>
                </a>
              </div>
              <div className="links__item">
                <a href="" title="Написать мне в LinkedIn">
                  <Icon.Linkedin className="icon  icon-40" color={"#0866C2"} />
                </a>
              </div>
            </div>
            <div className="footer__rights">
              <p>© Zhanda.kz 2024 </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
