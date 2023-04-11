import React from 'react'
import './styles/Careers.css'

const Careers = () => {
  return (
    <div className="careers-container">
      <h1 className="careers-heading">Careers</h1>
      <p className="careers-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laudantium tenetur totam doloribus incidunt nisi cupiditate ipsa perspiciatis similique expedita soluta adipisci quia voluptates voluptatum? Pariatur qui ut quod eaque!
      </p>
      <ul className="job-list">
        <li className="job-item">
          <h2 className="job-title">Software Developer</h2>
          <p className="job-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, exercitationem. Perspiciatis rem earum necessitatibus qui voluptates dignissimos amet dolores fuga?
          </p>
        </li>
        <li className="job-item">
          <h2 className="job-title">UX Designer</h2>
          <p className="job-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, exercitationem. Perspiciatis rem earum necessitatibus qui voluptates dignissimos amet dolores fuga?
          </p>
        </li>
        <li className="job-item">
          <h2 className="job-title">Marketing Specialist</h2>
          <p className="job-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, exercitationem. Perspiciatis rem earum necessitatibus qui voluptates dignissimos amet dolores fuga?
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Careers
