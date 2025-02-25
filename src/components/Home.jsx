import React, {useState, useEffect} from 'react'
import './../styles/Home.css'
import profilephoto from './../assets/profile-photo.png'

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

      <div className="right">
        <div className="my-photo">
          <img src={profilephoto} alt="Prakhar Pande" />
        </div>
      </div>
    </div>
  )
}

export default Home