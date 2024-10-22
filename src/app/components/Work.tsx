import React from "react";

const Work = () => {
  return (
    <div className="work">
      <div className="work__img">
        <img
          src="./images/dashboard-screen.png"
          alt="Designing Dashboard screenshot"
        />
      </div>
      <h3 className="work__title">Designing Dashboards</h3>
      <div className="work__properties">
        <div className="work__date">2023</div>
        <div className="work__theme">Dashboard</div>
      </div>
      <div className="work__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima
        veritatis at vero debitis molestiae inventore in ut. Dolore inventore
        non earum aperiam iusto laudantium quam impedit. Harum, quasi maxime.
      </div>
      <div className="work__buttons">
        <a href="/works/23" className="work__button-about btn btn-black">
          More
        </a>
      </div>
    </div>
  );
};

export default Work;
