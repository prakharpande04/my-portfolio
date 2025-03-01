import React, {useState, useEffect} from 'react'
import './../styles/Home.css'
import profilephoto from './../assets/profile-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

function Home() {
  const roles = ["MERN Stack Developer", "Database Developer", "Systems Designer"];
  const [roleData, setRoleData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleData((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className='home'>
      <div className="left">
        <div className="contact-section">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        <div className="info-section">
          <p className="l1">
            Hi, I am
          </p>
          <p className="l2">
            Prakhar Pande
          </p>
          <p className="l3">
            And I'm a <span className='role-title'>{roles[roleData]}</span>
          </p>
        </div>

      </div>

      <div className="right">
        <div className="my-photo">
          <img src={profilephoto} alt="Prakhar Pande" />
        </div>
      </div>
    </div>
  )
}

export default Home