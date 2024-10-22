import React from 'react'
import HomeWorks from './../components/HomeWorks';
import './../styles/works-section.scss';

const WorksSection = () => {
  return (
    <main className="works-section">
      <div className="container">
        <div className="row">
          <h1 className="works-section__head">My works</h1>
          <div className="works-section__list">
            <HomeWorks />
          </div>
        </div>
      </div>
    </main>
  )
}

export default WorksSection;
